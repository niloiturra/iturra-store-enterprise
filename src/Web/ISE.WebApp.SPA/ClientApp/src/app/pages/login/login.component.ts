import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ResponseResult } from 'src/app/shared/models/ErrorModel';
import { UsuarioLogin } from 'src/app/shared/models/Usuario';
import { LoginService } from 'src/app/shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  hidePasswrd = true;
  frmLogin: FormGroup;

  private _unsubscribeAll: Subject<any>;
  constructor(
    private _fb: FormBuilder,
    private _loginService: LoginService,
  ) {
    this._unsubscribeAll = new Subject<any>();
  }

  ngOnInit() {
    this.frmLogin = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  OnSubmit(): void {
    if (this.frmLogin.invalid) {
      return;
    }

    this._loginService.login(UsuarioLogin.fromJson(this.frmLogin.value))
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(
        (res) => {
          //WIP -> Resposta de Sucesso
        }
      );
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
