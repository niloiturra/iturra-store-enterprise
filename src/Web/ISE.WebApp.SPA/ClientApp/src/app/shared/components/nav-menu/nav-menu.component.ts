import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UsuarioRespostaLogin } from '../../models/Usuario';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit, OnDestroy {
  public usuarioLogado: UsuarioRespostaLogin = null;
  private _unsubscribeAll: Subject<any> = new Subject();
  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.currentUser
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((user) => {
        this.usuarioLogado = user;
      });
  }

  sair(): void {
    this.loginService.logout();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
