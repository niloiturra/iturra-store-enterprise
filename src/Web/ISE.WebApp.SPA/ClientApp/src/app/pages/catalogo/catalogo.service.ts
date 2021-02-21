import { Injectable, Injector } from '@angular/core';
import { Produto } from 'src/app/shared/models/Produto';
import { BaseService } from 'src/app/shared/services/base/base.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService extends BaseService<Produto> {

  constructor(protected injector: Injector) {
    super(`${environment.baseUrl}/catalogo/produtos`, injector);
  }
}
