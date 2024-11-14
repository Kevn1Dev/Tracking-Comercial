import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosEnEsperaComponenteComponent } from './proyectos-en-espera-componente.component';

describe('ProyectosEnEsperaComponenteComponent', () => {
  let component: ProyectosEnEsperaComponenteComponent;
  let fixture: ComponentFixture<ProyectosEnEsperaComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectosEnEsperaComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosEnEsperaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
