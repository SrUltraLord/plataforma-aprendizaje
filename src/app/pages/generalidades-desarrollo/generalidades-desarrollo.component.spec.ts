import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralidadesDesarrolloComponent } from './generalidades-desarrollo.component';

describe('GeneralidadesDesarrolloComponent', () => {
  let component: GeneralidadesDesarrolloComponent;
  let fixture: ComponentFixture<GeneralidadesDesarrolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralidadesDesarrolloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralidadesDesarrolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
