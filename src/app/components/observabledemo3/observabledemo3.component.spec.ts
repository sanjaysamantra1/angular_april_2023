import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observabledemo3Component } from './observabledemo3.component';

describe('Observabledemo3Component', () => {
  let component: Observabledemo3Component;
  let fixture: ComponentFixture<Observabledemo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Observabledemo3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Observabledemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
