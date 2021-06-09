import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moda1Component } from './moda1.component';

describe('Moda1Component', () => {
  let component: Moda1Component;
  let fixture: ComponentFixture<Moda1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Moda1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Moda1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
