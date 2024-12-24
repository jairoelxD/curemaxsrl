import { Component } from '@angular/core';
import { Producto } from '../../models/producto.models';

@Component({
  selector: 'app-productos',
  standalone: false,
  
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
listaprotuctos:Producto[]=[
  {nombre:'Atorvastatina',precio:5.5,preciodol:'$5.5'},
  {nombre:'Azitromicina',precio:8.2,preciodol:'$8.2'},
  {nombre:'Auxxil',precio:5,preciodol:'$5'},
  {nombre:'Paracetamol',precio:4,preciodol:'$4'},
  {nombre:'Diclofenaco',precio:3.5,preciodol:'$3.5'},
  {nombre:'Troxxil',precio:3.4,preciodol:'$3.4'},
  {nombre:'Ibuprofeno',precio:2.2,preciodol:'$2.2'},
  {nombre:'Sildenafil',precio:1.2,preciodol:'$1.2'},
  {nombre:'Autdol',precio:4.4,preciodol:'$4.4'},
  {nombre:'Zubam',precio:35.2,preciodol:'$35.2'},
  {nombre:'Salbutamol',precio:2.2,preciodol:'$2.2'},
  {nombre:'Furosemida',precio:3.3,preciodol:'$3.3'},
  {nombre:'Losartan',precio:3.2,preciodol:'$3.2'},
  {nombre:'Loperamida',precio:3.1,preciodol:'$3.1'},
  {nombre:'Carbamazepina',precio:5.5,preciodol:'$5.5'},
  {nombre:'Claritromicina',precio:3.5,preciodol:'$3.5'},
  {nombre:'Agnus',precio:2.2,preciodol:'$2.2'},
  {nombre:'Coxidol',precio:5.56,preciodol:'$5.56'},
  {nombre:'Gastride',precio:8.21,preciodol:'$8.21'},
  {nombre:'Metformina',precio:7.41,preciodol:'$7.41'},
];
}