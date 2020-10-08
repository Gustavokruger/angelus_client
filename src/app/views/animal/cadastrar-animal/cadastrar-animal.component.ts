import { Component, OnInit } from '@angular/core';
import { Animal } from '../../../Models/Animal';
import { AnimalService } from '../../../services/animal.service';

@Component({
  selector: 'app-cadastrar-animal',
  templateUrl: './cadastrar-animal.component.html',
  styleUrls: ['./cadastrar-animal.component.css']
})
export class CadastrarAnimalComponent implements OnInit {


  animal: Animal; //vai receber os dados do formulario

  constructor(private service: AnimalService) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.animal)
  }

}
