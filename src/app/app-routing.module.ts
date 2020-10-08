import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { ListarAnimalComponent } from './views/animal/listar-animal/listar-animal.component';
import { CadastrarAnimalComponent } from './views/animal/cadastrar-animal/cadastrar-animal.component';

const routes: Routes = [
  {
    path: '',
    component:ListarAnimalComponent
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  {
    path: 'animal/cadastrar',
    component: CadastrarAnimalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
