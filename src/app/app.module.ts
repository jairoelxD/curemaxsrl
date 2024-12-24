import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { ExplorarprodComponent } from './pages/explorarprod/explorarprod.component';
import { DolarABolivianoPipe } from './pages/pipes/dolar-a-boliviano.pipe';
import { ProductosComponent } from './pages/productos/productos.component';  // Importa el pipe

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    AcercadeComponent,
    PipesComponent,
    CapitalizadoPipe,
    ExplorarprodComponent,
    ProductosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DolarABolivianoPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }