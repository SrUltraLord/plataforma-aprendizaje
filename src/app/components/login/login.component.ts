import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MockServerService } from './../../services/mock-server.service';

import { NzMessageService } from 'ng-zorro-antd/message';

import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private msService: MockServerService,
    private messageServide: NzMessageService,
    private socialAuthService: SocialAuthService,
    private fb: FormBuilder
  ) {
    // this.socialUser = null;
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedIn = user != null;

      if (!this.isLoggedIn) return;

      this.msService.loginUser();
      this.router.navigateByUrl('/quimica');
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }

    if (this.validateForm.invalid) {
      return;
    }

    let usuario: string = this.validateForm.controls['userName'].value;
    let clave: string = this.validateForm.controls['password'].value;

    if (usuario !== 'david' || clave !== 'david') {
      this.messageServide.create(
        'error',
        'Usuario o contraseña incorrecto(s).'
      );
      return;
    }

    this.msService.loginUser();
    this.router.navigateByUrl('/quimica');
  }

  loginWithGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
