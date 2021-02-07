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
  public rippleRadiusValue = 15;
  public badgeValue = 7;
  public infoBagIcon = 'Imagem retirada de https://www.flaticon.com/free-icon/bag_825561 (Flat Icon Free)';
  public infoUserIcon = 'Imagem retirada de https://www.flaticon.com/free-icon/user_2919600 (Flat Icon Free)';

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
