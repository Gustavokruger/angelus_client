import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './layout/main/main.component';

import { LoginComponent } from './views/login/login.component';
import { ListarAnimalComponent } from './views/animal/listar-animal/listar-animal.component';
import { CadastrarAnimalComponent } from './views/animal/cadastrar-animal/cadastrar-animal.component';
import { IndexComponent } from './views/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app',
    component: MainComponent,
    children: [
      {
        path: 'animal',
        component: ListarAnimalComponent
      },
      {
        path: 'animal/cadastrar',
        component: CadastrarAnimalComponent
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
