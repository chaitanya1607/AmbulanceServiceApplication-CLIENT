import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

declare var H: any;
@Component({
  selector: 'app-navigation-maps',
  templateUrl: './navigation-maps.component.html',
  styleUrls: ['./navigation-maps.component.css']
})
export class NavigationMapsComponent implements OnInit, OnChanges {
  @ViewChild("map")
  public mapElement!: ElementRef;

  @Input()
  public appId: any;

  @Input()
  public apiCode: any;

  @Input()
  public start: any;

  @Input()
  public finish: any;

  @Input()
  public width: any;

  @Input()
  public height: any;

  public directions: any;

  private platform: any;
  private map: any;
  private router: any;
  private ui: any

  public constructor() { }

  public ngOnInit() {
      this.platform = new H.service.Platform({
          "app_id": this.appId,
          "app_code": this.apiCode,
          useHTTPS: true
      });
      this.directions = [];
      this.router = this.platform.getRoutingService();
      
  }
  

  public ngAfterViewInit() {
    let pixelRatio = window.devicePixelRatio || 1;  
      let defaultLayers = this.platform.createDefaultLayers({
        tileSize: pixelRatio === 1 ? 256 : 512,  
        ppi: pixelRatio === 1 ? undefined : 320  
      });
      this.map = new H.Map(
          this.mapElement.nativeElement,
          defaultLayers.normal.map,
          {
            pixelRatio: pixelRatio,
              zoom: 10,
              center: { lat: this.start.split(",")[0], lng: this.start.split(",")[1] }
          }
      );
      this.route(this.start, this.finish);
      var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));  
    var ui = H.ui.UI.createDefault(this.map, defaultLayers,'en-US'); 
    ui.getControl('zoom').setEnabled(false);
    
  }
  

  public ngOnChanges(changes: SimpleChanges) {
    if((changes["start"] && !changes["start"].isFirstChange()) || (changes["finish"] && !changes["finish"].isFirstChange())) {
      this.route(this.start, this.finish);
  }
   }
  public route(start: any, finish: any) {
    let params = {
        "mode": "fastest;car",
        "waypoint0": "geo!" + this.start,
        "waypoint1": "geo!" + this.finish,
        "representation": "display"
    }
    this.map.removeObjects(this.map.getObjects());
    this.router.calculateRoute(params, (data: { response: { route: any[]; }; shape: string[]; }) => {
        if(data.response) {
            this.directions = data.response.route[0].leg[0].maneuver;
            data = data.response.route[0];
            let lineString = new H.geo.LineString();
            data.shape.forEach((point: string) => {
                let parts = point.split(",");
                lineString.pushLatLngAlt(parts[0], parts[1]);
            });
            let routeLine = new H.map.Polyline(lineString, {
                style: { strokeColor: "blue", lineWidth: 5 }
            });
            var icon = new H.map.Icon('../../assets/favicon2.png');
            let startMarker = new H.map.Marker({
               
                lat: this.start.split(",")[0],
                lng: this.start.split(",")[1]
            },{icon:icon});
            let finishMarker = new H.map.Marker({
                lat: this.finish.split(",")[0],
                lng: this.finish.split(",")[1]
            });
            this.map.addObjects([routeLine, startMarker, finishMarker]);
            this.map.setViewBounds(routeLine.getBounds());
        }
    }, (error: any) => {
        console.error(error);
    });
}

}
