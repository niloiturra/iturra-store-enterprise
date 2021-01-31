import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { PasswordMustMatchState } from 'src/app/shared/models/ErrorStateMatcher';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  hidePasswrd = true;
  frmRegister: FormGroup;
  confirmPasswrdMatcher = new PasswordMustMatchState();
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.frmRegister = this._fb.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]],
      senhaConfirmacao: [null, [Validators.required]]
    }, { validators: this.checkPasswords });
  }

  OnSubmit(): void {

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

  }
}
