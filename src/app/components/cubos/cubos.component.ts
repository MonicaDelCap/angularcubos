import { Component, OnInit } from '@angular/core';
import Cubo from '../../models/Cubo';
import { ServiceCubos } from '../../service/service.cubos';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cubos',
  templateUrl: './cubos.component.html',
  styleUrl: './cubos.component.css'
})
export class CubosComponent implements OnInit {

  public cubos!:Array<Cubo>;
  constructor(
    private _service:ServiceCubos,
    private _activated:ActivatedRoute
  ){}

  ngOnInit(): void {
    this._activated.params.subscribe((params:Params) => {
      this._service.getCubosByMarca(params['marca']).then(r => this.cubos= r.data)
    })
  }

}
