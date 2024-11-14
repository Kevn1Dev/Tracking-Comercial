import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponenteComponent } from './navbar-componente.component';

describe('NavbarComponenteComponent', () => {
  let component: NavbarComponenteComponent;
  let fixture: ComponentFixture<NavbarComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
