import { Component, OnInit } from '@angular/core';
import {
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
// import {Validators} from '@angular/common';
import {isEmail, isNumeric, matchPasswords, exampleValidator} from "../customFormValidators";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [ REACTIVE_FORM_DIRECTIVES]
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  email: FormControl;
  password: FormControl;
  hasFocus: boolean;
  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.email = new FormControl('', [
      Validators.required,
      isEmail
    ]);

    this.password = new FormControl('', [
      Validators.required,
      isNumeric,
      Validators.minLength(6),
      Validators.maxLength(15)
    ]);

    this.myForm = this._formBuilder.group({
      email: this.email,
      password: this.password
    });

  }
}
