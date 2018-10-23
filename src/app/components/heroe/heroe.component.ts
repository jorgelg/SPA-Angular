import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe: Heroe = new Heroe();

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      // console.log(params['id']);
      const indice: number = params['id'];
      this.heroe = this._heroesService.getHeroe(indice);
    });

  }

}
