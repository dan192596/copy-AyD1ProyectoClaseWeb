import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AydBusquedaLibroComponent } from './ayd-busqueda-libro.component';

describe('AydBusquedaLibroComponent', () => {
  let component: AydBusquedaLibroComponent;
  let fixture: ComponentFixture<AydBusquedaLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AydBusquedaLibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AydBusquedaLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
