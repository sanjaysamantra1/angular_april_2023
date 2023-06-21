import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observabledemo4Component } from './observabledemo4.component';

describe('Observabledemo4Component', () => {
  let component: Observabledemo4Component;
  let fixture: ComponentFixture<Observabledemo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Observabledemo4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Observabledemo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
