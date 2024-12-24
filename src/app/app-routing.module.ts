import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { ExplorarprodComponent } from './pages/explorarprod/explorarprod.component';  
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },  
  { path: 'acercade', component: AcercadeComponent }, 
  { path: 'pipes', component: PipesComponent },
  {path: 'explorarprod', component:ExplorarprodComponent}  ,
  {path: 'listaproductos', component:ProductosComponent}  ,

  { path: '**', component: InicioComponent },  
   


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]

})
export class AppRoutingModule { }