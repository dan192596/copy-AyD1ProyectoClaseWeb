import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ExampleComponent } from './example/example.component';
import { Example2Component } from './example2/example2.component';
import { AydBusquedaLibroComponent } from './ayd-busqueda-libro/ayd-busqueda-libro.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },  
  { path: 'profile', component: PerfilComponent }, 
  { path: 'example', component: ExampleComponent },

  { path: 'busqueda/libros', component: AydBusquedaLibroComponent },


  { path: 'example2', component: Example2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
