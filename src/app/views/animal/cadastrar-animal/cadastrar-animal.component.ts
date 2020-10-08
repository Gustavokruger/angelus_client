import { Component, OnInit } from '@angular/core';
import { Animal } from '../../../Models/Animal';
import { AnimalService } from '../../../services/animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-animal',
  templateUrl: './cadastrar-animal.component.html',
  styleUrls: ['./cadastrar-animal.component.css']
})
export class CadastrarAnimalComponent implements OnInit {

  animal: Animal;
  
  constructor(private router: Router, private animalService: AnimalService) { }

  ngOnInit(): void {
    this.animal = new Animal();
  }

  create(): void {
    this.animalService.create(this.animal).subscribe((animal) => {
      console.log(animal);
    });
  }

  navigateToCadastrarAnimal(): void{
    this.router.navigate(['animal/cadastrar']);
  }
}
