import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoDetalleComponenteComponent } from './proyecto-detalle-componente.component';

describe('ProyectoDetalleComponenteComponent', () => {
  let component: ProyectoDetalleComponenteComponent;
  let fixture: ComponentFixture<ProyectoDetalleComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoDetalleComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoDetalleComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
