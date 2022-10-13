import { inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should grant that 1 + 4 = 5',
  //   inject([CalculadoraService], (service: CalculadoraService) => {
  //     let soma = service.calcular(1,4,CalculadoraService.SOMA);
  //     expect(soma).toEqual(5)
  //   })
  // );
});
