import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { UsuarioGuard } from './guards/usuario-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  {
    path: 'quimica',
    // canActivate: [UsuarioGuard],
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
