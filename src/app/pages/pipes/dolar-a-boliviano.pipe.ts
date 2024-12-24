import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dolarABoliviano'  // El nombre del pipe
})
export class DolarABolivianoPipe implements PipeTransform {

  // Tasa de cambio de ejemplo, 1 USD = 6.96 Bs (puedes ajustarla según la tasa real)
  private tasaCambio: number = 6.96;

  transform(valor: number): string {
    if (valor == null || isNaN(valor)) {
      return 'Bs 0.00';  // Si el valor no es válido, devolvemos Bs 0.00
    }

    // Conversión de dólares a bolivianos
    const bolivianos = valor * this.tasaCambio;
    return `Bs ${bolivianos.toFixed(2)}`;  // Retornamos el valor convertido en bolivianos
  }
}