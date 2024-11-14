import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosAprobadosComponenteComponent } from './proyectos-aprobados-componente.component';

describe('ProyectosAprobadosComponenteComponent', () => {
  let component: ProyectosAprobadosComponenteComponent;
  let fixture: ComponentFixture<ProyectosAprobadosComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectosAprobadosComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosAprobadosComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
