import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from 'src/app/models/heroe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe = new Heroe();
  @Input() Indice: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private _router: Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  VerHeroe() {
    // // console.log(indice);
    this._router.navigate(['/heroe', this.Indice]);

    // this.heroeSeleccionado.emit(this.Indice);
  }

}
