import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  username: string = "";
  password: string = "";

  // dependency injections
  // fb: FormBuilder = inject(FormBuilder);

  // FormControl
  loginForm: FormGroup;

  public get userNameValue() : string {
    return this.loginForm.get('username')?.value; 
  }
  
  public get passwordValue() : string {
    return this.loginForm.get('password')?.value;
  }
  
  constructor(private fb: FormBuilder, private router: Router){
    this.loginForm = this.fb.group({
      username: [""],
      password: [""]
    });
    
  }

  ngOnInit(): void {
      
  }

  submitForm(){
    if(this.userNameValue.toLowerCase() === 'sanskar' && this.passwordValue.toLowerCase() === 'qwerty'){
      console.log("Success");
      this.router.navigate(['otp-validation'])
    } else {
      console.log("Failure");
    }
  }
  
}
