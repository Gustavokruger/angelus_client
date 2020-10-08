import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
})
export class UserInfoComponent implements OnInit {
  qanimal:Number=0;
  constructor(private animalService: AnimalService, 
    ) { }

    ngOnInit(): void {
      this.animalService.qanimal().subscribe((qtdea) =>{
        this.qanimal = qtdea;
      })
    }
}
