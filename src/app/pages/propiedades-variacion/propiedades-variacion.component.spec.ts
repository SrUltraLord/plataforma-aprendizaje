import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadesVariacionComponent } from './propiedades-variacion.component';

describe('PropiedadesVariacionComponent', () => {
  let component: PropiedadesVariacionComponent;
  let fixture: ComponentFixture<PropiedadesVariacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropiedadesVariacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropiedadesVariacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
