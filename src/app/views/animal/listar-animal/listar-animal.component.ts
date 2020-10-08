import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from 'src/app/Models/Animal';
import { AnimalService } from 'src/app/services/animal.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-listar-animal',
  templateUrl: './listar-animal.component.html',
  styleUrls: ['./listar-animal.component.css']
})
export class ListarAnimalComponent implements OnInit {

  animais: Animal[] = [];
  
  constructor(
    private router: Router, 
    private animalService: AnimalService, 
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    this.animalService.list().subscribe((lista) =>{
      this.animais = lista;
    })
  }

}
