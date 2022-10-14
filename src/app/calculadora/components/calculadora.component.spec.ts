import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';
import {CalculadoraService} from '../services'
import { By } from '@angular/platform-browser';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ],
      providers:[
        CalculadoraService
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve garantir que a soma entre 3 e 2 seja 5', () => {
    let btn3 = fixture.debugElement.query(By.css('#btn3'))
    let btnSoma = fixture.debugElement.query(By.css('#btnSoma'))
    let btn2 = fixture.debugElement.query(By.css('#btn2'))
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'))
    let display = fixture.debugElement.query(By.css('#display'))

    btn3.triggerEventHandler('click', null)
    fixture.detectChanges()

    btnSoma.triggerEventHandler('click', null)
    fixture.detectChanges()

    btn2.triggerEventHandler('click', null)
    fixture.detectChanges()

    btnCalcular.triggerEventHandler('click', null)
    fixture.detectChanges()

    expect(display.nativeElement.value).toEqual('5')
  })

  it('deve garantir que a subtracao entre 3 e 2 seja 1', () => {
    let btn3 = fixture.debugElement.query(By.css('#btn3'))
    let btnSubtracao = fixture.debugElement.query(By.css('#btnSubtracao'))
    let btn2 = fixture.debugElement.query(By.css('#btn2'))
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'))
    let display = fixture.debugElement.query(By.css('#display'))

    btn3.triggerEventHandler('click', null)
    fixture.detectChanges()

    btnSubtracao.triggerEventHandler('click', null)
    fixture.detectChanges()

    btn2.triggerEventHandler('click', null)
    fixture.detectChanges()

    btnCalcular.triggerEventHandler('click', null)
    fixture.detectChanges()

    expect(display.nativeElement.value).toEqual('1')
  })

  it('deve garantir que a multiplicacao entre 5 e 4 seja 20', () => {
    let btn5 = fixture.debugElement.query(By.css('#btn5'))
    let btnSubtracao = fixture.debugElement.query(By.css('#btnMultiplicacao'))
    let btn4 = fixture.debugElement.query(By.css('#btn4'))
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'))
    let display = fixture.debugElement.query(By.css('#display'))

    btn5.triggerEventHandler('click', null)
    fixture.detectChanges()

    btnSubtracao.triggerEventHandler('click', null)
    fixture.detectChanges()

    btn4.triggerEventHandler('click', null)
    fixture.detectChanges()

    btnCalcular.triggerEventHandler('click', null)
    fixture.detectChanges()

    expect(display.nativeElement.value).toEqual('20')
  })
});
