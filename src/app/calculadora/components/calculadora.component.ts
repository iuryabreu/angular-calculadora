import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  private number1: string;
  private number2: string;
  private result: number;
  private operation: string;

  constructor(private calculadoraService: CalculadoraService) {}

  ngOnInit(): void {
    this.limpar();
  }

  addNumber(number: string): void {
    if (this.operation === null)
      this.number1 = this.concatNumber(this.number1, number);
    else this.number2 = this.concatNumber(this.number2, number);
  }

  concatNumber(currentNumber: string, numConcat: string): string {
    //caso tenha apenas 0 ou null, reinicia o valor
    if (currentNumber === '0' || currentNumber === null) currentNumber = '';

    // Adiciona um 0 antes caso o primeiro digito serja '.'
    if (numConcat === '.' && currentNumber === '') return '0.';

    //evita a inserção de um segundo '.'
    if (numConcat === '.' && currentNumber.indexOf('.') > -1)
      return currentNumber;

    return currentNumber + numConcat;
  }

  setOperation(operation: string): void {
    //Define uma opeção, caso nao esteja definida
    if (this.operation === null) {
      this.operation = operation;
      return;
    }
    if (this.number2 !== null) {
      this.result = this.calculadoraService.calcular(
        parseFloat(this.number1),
        parseFloat(this.number2),
        this.operation
      );
      this.operation = operation;
      this.number1 = this.result.toString();
      this.number2 = null;
      this.result = null;
    }
  }

  calc(): void {
    if (this.number2 === null) return;

    this.result = this.calculadoraService.calcular(
      parseFloat(this.number1),
      parseFloat(this.number2),
      this.operation
    );
  }

  get display(): string {
    if (this.result !== null) return this.result.toString();

    if (this.number2 !== null) return this.number2

    return this.number1;
  }

  limpar(): void {
    this.number1 = '0';
    this.number2 = null;
    this.result = null;
    this.operation = null;
  }
}
