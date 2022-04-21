import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { Hospital } from '../../model/hospital';
import { HospitalService } from '../../service/hospital.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css']
})
export class AddHospitalComponent implements OnInit {

  hospital:Hospital = new Hospital();
  registrationFile : File;
  file:any;
  regFileGiven = false;
  submitted = false;
  isSpinning=true;
  error:any;




  constructor(  private hospitalService:HospitalService,
    private router:Router, private formBuilder:FormBuilder) { }

    addHospitalForm = this.formBuilder.group(
      {
        hospitalName:['',[Validators.required,Validators.minLength(3),Validators.pattern("^[a-zA-Z ]*$")]],
        phoneNumber:['',[Validators.required,Validators.minLength(10), Validators.pattern("^[0-9]{10}")]],
        address:['',[Validators.required, Validators.minLength(10),Validators.maxLength(100)]],
        latitude:['',[Validators.required]],
        longitude:['',[Validators.required]],
        speciality:['',[Validators.required]]
      }
    )

  ngOnInit(): void {
    this.isSpinning=false;
  }

  onRegistrationFileChange(event){
    this.file = document.getElementById("regFile");
    if(event.target.files[0].type!="application/pdf"){
      Swal.fire('Hospital Registration Needed!!', 'Please upload Registration Document only PDF', 'warning')
    }else{
    this.registrationFile=event.target.files[0];
    }
    if(this.file.length!=0)  {
      this.regFileGiven = true;
    }
  }

 
  onSubmit(addHospitalForm:FormGroup){
    if(this.registrationFile==null){
      Swal.fire('Hospital Registration needed!!', 'Please upload Hospital Registration PDF', 'error')
    }
    else{

    if(addHospitalForm.valid){
      this.isSpinning=true;
      const hospital = addHospitalForm.value;
        const formData = new FormData();
        formData.append("hospital",JSON.stringify(hospital));
        formData.append("registrationFile", this.registrationFile);
        this.hospitalService.addHospital(formData).subscribe(response=>{
          console.log(response);
          this.isSpinning=false;
          this.gotoList();
        }
        ,
        )
      }
      this.submitted=true;
      this.regFileGiven=false;
    }
  }
  
  gotoList(){
    Swal.fire('Hospital Added!!','Hospital Added Successfully','success');
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['home/hospital']);
  }); 
  
  }
  goBack(){
    this.router.navigate(['hospital'])
  }
}
