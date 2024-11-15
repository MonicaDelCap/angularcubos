import { Injectable } from "@angular/core";
import axios from "axios";
import { environment } from "../../environments/environment.development";
import Login from "../models/Login";

@Injectable() 
export class ServiceCubos {

    getCubos():Promise<any>{
        let request = "api/Cubos";
        return new Promise (function(resolve){
            axios.get(environment.urlCubos + request).then(r => resolve(r))
        })
    }
    getMarcas():Promise<any>{
        let request= "api/Cubos/Marcas";
        return new Promise(function(resolve){
            axios.get(environment.urlCubos + request).then( r => resolve(r))
        })
    }

    getCubosByMarca(marca:string):Promise<any>{
        let request = "api/Cubos/CubosMarca/" + marca;
        return new Promise(function(resolve){
            axios.get(environment.urlCubos + request).then(r => resolve(r))
        })
    }

    getCuboById(id:number):Promise<any>{
        let request = "api/Cubos/" + id;
        return new Promise(function(resolve){
            axios.get(environment.urlCubos + request).then(r => resolve(r))
        })
    }

    getComentarios(id:number):Promise<any>{
        let request = "api/ComentariosCubo/GetComentariosCubo/" + id;
        return new Promise(function(resolve){
            axios.get(environment.urlCubos + request).then(r => resolve(r))
        })
    }

    getToken(login:Login):Promise<any>{
        let request = "/api/Manage/Login";
        let header = {"Content-Type":"application/json"}
        return new Promise(function(resolve){
            axios.post(environment.urlCubos + request, JSON.stringify(login),{headers:header})
            .then(r => resolve(r))
            .catch(r => resolve(r))
        })
    }

    getPerfil():Promise<any>{
        let request = "api/Manage/PerfilUsuario";
        let header = {"Authorization": `Bearer ${localStorage.getItem('authToken')}`}
        return new Promise(function(resolve){
            axios.get(environment.urlCubos + request,{headers:header})
            .then( r => resolve(r.data))
        })
    }

    getHistorialCompras():Promise<any>{
        let request = "api/Compra/ComprasUsuario";
        let header = {"Authorization": `Bearer ${localStorage.getItem('authToken')}`}
        return new Promise(function(resolve){
            axios.get(environment.urlCubos + request,{headers:header})
            .then( r => resolve(r))
        })
    }

    comprarCubo(id:number):Promise<any>{
        let request = "api/Compra/InsertarPedido/" +id;
        let header = {
            "Authorization": `Bearer ${localStorage.getItem('authToken')}`,
            "Content-Type":"application/json",
        }
        console.log(header)
        return new Promise(function(resolve){
            axios.post(environment.urlCubos + request,null, {headers:header})
            .then(r => resolve(r))
            .catch(r => resolve(r))
        })
    }
}
