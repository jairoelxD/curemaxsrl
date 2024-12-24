import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-acercade',
  standalone: false,
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']  // Asegúrate de usar 'styleUrls' en vez de 'styleUrl'
})
export class AcercadeComponent {

  // Definir la URL del mapa
  public mapUrl: any;

  constructor(private sanitizer: DomSanitizer) {
    // Aquí agregas la URL del mapa de Google que deseas mostrar
    const url = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3651.741968974354!2d-63.132522!3d-17.782773!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f578f1e7632a9f%3A0x19f6b043bd7358e1!2sParque%20Empresarial%201!5e0!3m2!1ses!2sbo!4v1678980560125!5m2!1ses!2sbo';
    // Sanear la URL para permitir que Angular lo permita en el iframe
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

