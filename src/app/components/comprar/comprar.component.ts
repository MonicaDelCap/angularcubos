import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceCubos } from '../../service/service.cubos';
import { Router } from '@angular/router';
import Cubo from '../../models/Cubo';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrl: './comprar.component.css'
})
export class ComprarComponent implements OnInit{

  public cubos!:Array<Cubo>
  @ViewChild("selectcubo") selectcubo!:ElementRef

  constructor(
    private _service:ServiceCubos,
    private _router:Router
  ){}

  ngOnInit(): void {
    this._service.getCubos().then(r => this.cubos = r.data)
  }

  comprar(){
    this._service.comprarCubo(this.selectcubo.nativeElement.value).then( () => this._router.navigate(["/perfil"]))
  }


}
