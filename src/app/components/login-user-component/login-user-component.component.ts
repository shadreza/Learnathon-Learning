import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-user-component',
  templateUrl: './login-user-component.component.html',
  styleUrls: ['./login-user-component.component.scss']
})
export class LoginUserComponentComponent implements OnInit {
  submitted : boolean = false
  title : string = "Login"
  passwordTypePassword: boolean = true
  // formControls
  loginUserGroup !: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.loginUserGroup = this.formBuilder.group({
      userName : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  ngOnInit(): void {
    // validation
    // this.loginForm = this.formBuilder.group({

    // })
  }

  onSubmitLoginForm() {
    console.log(this.loginUserGroup.value)
  }

  togglePasswordType() {
    this.passwordTypePassword =! this.passwordTypePassword
  }

}
