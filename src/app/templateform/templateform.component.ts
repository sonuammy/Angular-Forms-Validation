import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  email: string='';
  password: string='';
  mycolor: string='';
  msg: string='';
  lastname:string='';
  constructor() { }

  ngOnInit() {
  }

  login(myform){
    if(myform.valid){
    if(this.email==='amsusingh990@gmail.com' && this.password==='Admin@123'){
      this.msg='Successfully Login';
      this.mycolor='green';
    } else {
      this.msg='Invalid Login';
      this.mycolor='red';
    }
  }
  }
}
