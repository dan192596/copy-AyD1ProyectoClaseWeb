import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AydAppService {

  busquedaLibro;

  constructor() { }

  setBusquedaLibro(p){
    this.busquedaLibro = p;
  }
  getBusquedaLibro(){
    return this.busquedaLibro;
  }


}
