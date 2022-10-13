import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {

  //Constantes de opedores
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() {}

  /**
   * Metodo que realiza uma operação matematica recebendo
   * dois numeros e um codigo de operação matematica (+ , - , * , /)
   *
   * @param num1 number
   * @param num2 number
   * @param operacao string Operação a ser executada
   * @return number Resultado
   *
   * @author Iury Abreu
  */

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;

      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;

      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;

      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;

      default:
        resultado = 0;
    }

    return resultado;
  }
}
