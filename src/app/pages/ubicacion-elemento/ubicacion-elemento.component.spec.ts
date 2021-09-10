import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionElementoComponent } from './ubicacion-elemento.component';

describe('UbicacionElementoComponent', () => {
  let component: UbicacionElementoComponent;
  let fixture: ComponentFixture<UbicacionElementoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbicacionElementoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionElementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
