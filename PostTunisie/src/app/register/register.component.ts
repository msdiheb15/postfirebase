import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  myForm!: FormGroup;
    constructor(private fb : FormBuilder , private _auth : AuthService){}
  
      

  ngOnInit() {
    this.myForm = this.fb.group({
      nom : '',
      raison_social : '',
      address : '',
      tel :  '',
      code_postal : '',
      code_douane : '',
      email : '',
      fax : '',
      ville : '',
      motpass : '',
      remotpass : '',


    })
  }
 showinfo(){
  let formObj = this.myForm.getRawValue();
  console.log(formObj)
   
 }




}
