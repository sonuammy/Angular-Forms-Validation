import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reative-form-builder',
  templateUrl: './reative-form-builder.component.html',
  styleUrls: ['./reative-form-builder.component.css']
})
export class ReativeFormBuilderComponent {

  myform: FormGroup;
  msg: string;
  constructor( private fb:FormBuilder){
    this.myform =this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern('^[a-zA-z ]*$')]],
      lastname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern('^[a-zA-z ]*$')]],
      country: ['', [Validators.required]],
      gender:  ['Male', [ Validators.required]],
      mobile: ["", [ Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}$')]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,15}')]],  
      receivenewsletters: ["", [ ]]
    });
  }
 

  register() {
    if (this.myform.valid) {
      this.msg = 'Successfully register';
      // this.msg = 'Firstname: ' + this.myform.controls.firstname.value+'<br>Lastname: '+ this.myform.controls.lastname.value+'<br>Country: ' + this.myform.controls.country.value+'<br>Gender: ' + this.myform.controls.gender.value+'<br>Mobile: '+ this.myform.controls.mobile.value+'<br>Email Id: ' + this.myform.controls.email.value+'<br>Password: ' + this.myform.controls.password.value;
    console.log(this.myform.value);
    } else {
      this.msg = 'Invalid';
    }
  }
}
