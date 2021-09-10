import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciosPropuestosComponent } from './ejercicios-propuestos.component';

describe('EjerciciosPropuestosComponent', () => {
  let component: EjerciciosPropuestosComponent;
  let fixture: ComponentFixture<EjerciciosPropuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjerciciosPropuestosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosPropuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
