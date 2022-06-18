import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ageValidator } from 'src/app/validators/age.validator';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-register-user-component',
  templateUrl: './register-user-component.component.html',
  styleUrls: ['./register-user-component.component.scss'],
  providers: [MessageService]
})
export class RegisterUserComponentComponent implements OnInit {
  title: string = "Register"
  todayDate: Date = new Date()
  passwordTypePassword: boolean = true
  confirmPasswordTypePassword: boolean = true
  // formGroup
  registerUserGroup !: FormGroup

  constructor(private formBuilder: FormBuilder, private messageService: MessageService,  private primengConfig: PrimeNGConfig) { }

  addSingle() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }

  addMultiple() {
    this.messageService.addAll([{severity:'success', summary:'Service Message', detail:'Via MessageService'}, {severity:'info', summary:'Info Message', detail:'Via MessageService'}]);
  }

  clear() {
    this.messageService.clear();
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true
    this.registerUserGroup = this.formBuilder.group({
      userName : ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      email : ['', [Validators.required, Validators.email]],
      birthday : ['', [Validators.required, ageValidator()]],
      password : ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword : ['', [Validators.required, Validators.minLength(8)]]
    })
    this.registerUserGroup.valueChanges.subscribe((value) => {
      const emailErr = this.registerUserGroup.get('email')?.errors
      if (emailErr) {
        this.addSingle()
      }
    })
  }

  onSubmitRegisterForm() {
    console.log(this.registerUserGroup.value)
  }

  togglePasswordType() {
    this.passwordTypePassword = !this.passwordTypePassword
  }

  toggleConfirmPasswordType() {
    this.confirmPasswordTypePassword = !this.confirmPasswordTypePassword
  }

}
