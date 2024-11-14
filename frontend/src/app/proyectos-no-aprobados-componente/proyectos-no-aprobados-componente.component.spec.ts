import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosNoAprobadosComponenteComponent } from './proyectos-no-aprobados-componente.component';

describe('ProyectosNoAprobadosComponenteComponent', () => {
  let component: ProyectosNoAprobadosComponenteComponent;
  let fixture: ComponentFixture<ProyectosNoAprobadosComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectosNoAprobadosComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosNoAprobadosComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
