import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../service/service.cubos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  public marcas!:Array<string>;
  constructor(
    private _service:ServiceCubos,
    private _router:Router
  ){}

  ngOnInit(): void {
    this._service.getMarcas().then(r => this.marcas=r.data)
  }

  cerarSesion():void{
    localStorage.removeItem('authToken');
    this._router.navigate(["/"])
  }



}
