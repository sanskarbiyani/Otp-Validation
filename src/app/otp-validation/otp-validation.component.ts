import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp-validation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './otp-validation.component.html',
  styleUrl: './otp-validation.component.css'
})
export class OtpValidationComponent implements OnInit {
  // Injections
  formBuilder = inject(FormBuilder);

  // Variables
  currentOtp!: number;
  otpValidationForm!: FormGroup;
  validationSuccess: boolean = false;

  ngOnInit(): void {
    this.otpValidationForm = this.formBuilder.group({
      otp: [0],
    });
    this.generateOtp();
  }

  generateOtp() {
    this.currentOtp = Math.floor(100000 + Math.random() * 900000);  
    console.log(`Current Otp: ${this.currentOtp}`);
  }

  checkOtp(){
    const enteredOtp = this.otpValidationForm.get('otp')?.value;
    if (enteredOtp === this.currentOtp){
      this.validationSuccess = true;
    }
  }
}
