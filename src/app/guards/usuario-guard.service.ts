import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { MockServerService } from '../services/mock-server.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioGuardService {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(private msService: MockServerService, private router: Router) {
    this.path = [];
    this.route = new ActivatedRouteSnapshot();
  }

  canActivate(): boolean {
    if (!this.msService.isAuthUser()) {
      this.router.navigateByUrl('/quimica');
      return false;
    }

    return true;
  }
}
