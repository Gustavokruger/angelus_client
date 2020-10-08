import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
})
export class UserInfoComponent implements OnInit {
  qanimal:Number=0 ; qusuario:Number=0;
  constructor(private animalService: AnimalService, private usuarioService: UsuarioService
    ) { }

    ngOnInit(): void {
      this.animalService.qanimal().subscribe((qtdea) =>{
        this.qanimal = qtdea;
      });
      this.usuarioService.qusuario().subscribe((qtdeu) =>{
        this.qusuario = qtdeu;
      });
    }
}
