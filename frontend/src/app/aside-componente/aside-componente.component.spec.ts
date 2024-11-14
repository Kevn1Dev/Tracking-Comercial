import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideComponenteComponent } from './aside-componente.component';

describe('AsideComponenteComponent', () => {
  let component: AsideComponenteComponent;
  let fixture: ComponentFixture<AsideComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
