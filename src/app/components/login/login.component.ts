import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MockServerService } from './../../services/mock-server.service';

import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

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

  constructor(
    private router: Router,
    private msService: MockServerService,
    private messageServide: NzMessageService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
}
