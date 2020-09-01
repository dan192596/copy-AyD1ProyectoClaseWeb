import { Component, OnInit } from '@angular/core';
import { AydApiService } from '../_services/ayd-api.service';
import { AydAppService } from '../_services/ayd-app.service';

@Component({
  selector: 'app-ayd-busqueda-libro',
  templateUrl: './ayd-busqueda-libro.component.html',
  styleUrls: ['./ayd-busqueda-libro.component.scss']
})
export class AydBusquedaLibroComponent implements OnInit {

  constructor(
    private aydApiService: AydApiService,
    private aydAppService: AydAppService
  ) { }

  ngOnInit(): void {
    this.buscarLibro();    
  }


  buscarLibro(){
    let busqueda = this.aydAppService.getBusquedaLibro();
    if(busqueda){
      this.aydApiService.getLibros(busqueda)
      .subscribe(
        (res: any) => this.succesLibros(res)
      );
    }
  }

  succesLibros(res){

  }

}
