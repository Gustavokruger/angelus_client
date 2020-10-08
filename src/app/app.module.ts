import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListarAnimalComponent } from './views/animal/listar-animal/listar-animal.component';
import { LoginComponent } from './views/login/login.component';
import { CadastrarAnimalComponent } from './views/animal/cadastrar-animal/cadastrar-animal.component';
import { ListarUsuarioComponent } from './views/usuario/listar-usuario/listar-usuario.component';
import { CadastrarUsuarioComponent } from './views/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListarAnimalComponent,
    CadastrarAnimalComponent,
    ListarUsuarioComponent,
    CadastrarUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
