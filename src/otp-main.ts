// otp-element-main.ts
import { enableProdMode, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';

import { OtpValidationComponent } from './app/otp-validation/otp-validation.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(OtpValidationComponent).then((appRef) => {
  const otpElement = createCustomElement(OtpValidationComponent, { injector: appRef.injector });
  customElements.define('otp-validator', otpElement);
});