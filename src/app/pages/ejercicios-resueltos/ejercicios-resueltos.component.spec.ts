import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciosResueltosComponent } from './ejercicios-resueltos.component';

describe('EjerciciosResueltosComponent', () => {
  let component: EjerciciosResueltosComponent;
  let fixture: ComponentFixture<EjerciciosResueltosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjerciciosResueltosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosResueltosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
