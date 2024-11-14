import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponenteComponent } from './register-componente.component';

describe('RegisterComponenteComponent', () => {
  let component: RegisterComponenteComponent;
  let fixture: ComponentFixture<RegisterComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
