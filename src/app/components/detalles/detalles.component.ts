import { Component, OnInit } from '@angular/core';
import Cubo from '../../models/Cubo';
import { ServiceCubos } from '../../service/service.cubos';
import { ActivatedRoute, Params } from '@angular/router';
import Comentario from '../../models/Comentario';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent implements OnInit {

  public cubo!:Cubo
  public comentarios!: Array<Comentario>

  constructor(
    private _service:ServiceCubos,
    private _activated:ActivatedRoute
  ){}

  ngOnInit(): void {
    this._activated.params.subscribe((params:Params) => {
      this._service.getCuboById(params['id']).then(r => this.cubo = r.data);
      this._service.getComentarios(params['id']).then( r => this.comentarios = r.data)
    })
  }


}
