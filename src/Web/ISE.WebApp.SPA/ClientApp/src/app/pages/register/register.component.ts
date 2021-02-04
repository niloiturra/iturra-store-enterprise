import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PasswordMustMatchState } from 'src/app/shared/models/ErrorStateMatcher';
import { UsuarioRegistro } from 'src/app/shared/models/Usuario';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  hidePasswrd = true;
  frmRegister: FormGroup;
  confirmPasswrdMatcher = new PasswordMustMatchState();

  private _unsubscribeAll: Subject<any> = new Subject();
  constructor(
    private _fb: FormBuilder,
    private loginService: LoginService,
    private registerService: RegisterService
  ) { }

  ngOnInit(): void {
    this.frmRegister = this._fb.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]],
      senhaConfirmacao: [null, [Validators.required]]
    }, { validators: this.checkPasswords });
  }

  OnSubmit(): void {
    const novoRegistro = UsuarioRegistro.fromJson(this.frmRegister.value);
    this.registerService.registrar(novoRegistro)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe();
  }

  private checkPasswords(form: FormGroup): object {
    const password = form.get('senha').value;
    const confirmPassword = form.get('senhaConfirmacao').value;

    if (password && confirmPassword) {
      return password === confirmPassword ? null : { notSame: true };
    } else {
      return null;
    }
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
