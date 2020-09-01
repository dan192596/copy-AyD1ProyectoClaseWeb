import { Component, OnInit } from '@angular/core';
import { AydAppService } from '../_services/ayd-app.service';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/profile', title: 'Perfil',  icon:'person', class: '' },
    { path: '/example', title: 'Ejemplo',  icon:'content_paste', class: '' },
    { path: '/example2', title: 'Ejemplo2',  icon:'content_paste', class: '' },
    
    { path: '/example', title: 'Bitacora',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor(
    private router: Router,
    private aydAppService: AydAppService
  ) { }

  busqueda;

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
  }

  buscarLibro(){
    if(this.busqueda){
      let b = {
        titulo : this.busqueda
      }

      this.aydAppService.setBusquedaLibro(b);
      this.router.navigated = false;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(["busqueda/libros"]));
    }
  }

}
