import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: false,
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  nombre: string = 'Mi Nombre Ejemplo';
  porcentaje: number = 0.235;
  fecha: Date = new Date();
  
  // Nuevo valor para representar el precio en dólares
  precioDolar: number = 100;  // Ejemplo de precio en dólares
}
