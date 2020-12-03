import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './layout/main/main.component';

import { LoginComponent } from './views/login/login.component';
import { ListarAnimalComponent } from './views/animal/listar-animal/listar-animal.component';
import { ListarPostComponent } from './views/post/listar-post/listar-post.component';
import { CadastrarAnimalComponent } from './views/animal/cadastrar-animal/cadastrar-animal.component';
import { IndexComponent } from './views/index/index.component';
import { AuthGuard } from '../app/guards/auth.guard';
import { NoAuthGuard } from '../app/guards/no-auth.guard';
import { CadastrarPostComponent } from './views/post/cadastrar-post/cadastrar-post.component';

declare var $: any;

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: 'app',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: ListarPostComponent
      },
      {
        path: 'animal',
        component: ListarAnimalComponent
      },
      {
        path: 'animal/cadastrar',
        component: CadastrarAnimalComponent
      },
      {
        path: 'post/cadastrar',
        component: CadastrarPostComponent
      }
    ]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
