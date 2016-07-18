import { Component, OnInit } from '@angular/core';
import {Validators, FormControl, FormBuilder, FormGroup, REACTIVE_FORM_DIRECTIVES} from "@angular/forms";
import {isNumeric, isEmail, checkIfEmailIsAlreadyTaken} from "../customFormValidators";

@Component({
  moduleId: module.id,
  selector: 'app-sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.css'],
  directives: [ REACTIVE_FORM_DIRECTIVES]
})
export class SignUpComponent implements OnInit {

  myForm: FormGroup;
  password: FormControl;
  confirm_password: FormControl;
  email: FormControl;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {

    this.email= new FormControl('', [
      Validators.required,
      isEmail
    ], [
      checkIfEmailIsAlreadyTaken
    ]);

    this.password = new FormControl('', [
      Validators.required,
      isNumeric,
      Validators.maxLength(15),
      Validators.minLength(6)
    ]);

    this.confirm_password= new FormControl('', [
      Validators.required,

    ]);

    this.myForm = this._formBuilder.group({
      email: this.email,
      password: this.password,
      confirm_password: this.confirm_password
    });

    this.email.statusChanges.subscribe(data=>{
      console.log(data);
    })
  }

}
