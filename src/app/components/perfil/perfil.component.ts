import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../service/service.cubos';
import { Router } from '@angular/router';
import Usuario from '../../models/Usuario';
import Compra from '../../models/Compra';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {

  public perfil!:any;
  public show:boolean;
  public compras: Array<Compra>
  
  constructor(
    private _service:ServiceCubos,
    private _router:Router
  ){
    this.show = false;
    this.compras = new Array<Compra>
  }

  ngOnInit(): void {
    this._service.getPerfil().then( r => this.perfil = r)
  }

  historialCompra(){
    this._service.getHistorialCompras().then(r => this.compras = r.data)
    this.show = true
  }

  comprar(){
    this._router.navigate(["/comprar"])
  }


}
