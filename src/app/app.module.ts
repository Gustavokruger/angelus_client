import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { ListarAnimalComponent } from './views/animal/listar-animal/listar-animal.component';
import { LoginComponent } from './views/login/login.component';
import { CadastrarAnimalComponent } from './views/animal/cadastrar-animal/cadastrar-animal.component';
import { ListarUsuarioComponent } from './views/usuario/listar-usuario/listar-usuario.component';
import { CadastrarUsuarioComponent } from './views/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { IndexComponent } from './views/index/index.component';
import { MainComponent } from './layout/main/main.component';
import { AutenticarUsuarioComponent } from './views/usuario/autenticar-usuario/autenticar-usuario.component';
import { CadastraPostComponent } from './views/post/cadastra-post/cadastra-post.component';
import { ListarPostComponent } from './views/post/listar-post/listar-post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListarAnimalComponent,
    CadastrarAnimalComponent,
    ListarUsuarioComponent,
    CadastrarUsuarioComponent,
    IndexComponent,
    MainComponent,
    AutenticarUsuarioComponent,
    CadastraPostComponent,
    ListarPostComponent,
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
