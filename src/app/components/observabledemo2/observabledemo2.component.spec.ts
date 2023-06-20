import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observabledemo2Component } from './observabledemo2.component';

describe('Observabledemo2Component', () => {
  let component: Observabledemo2Component;
  let fixture: ComponentFixture<Observabledemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Observabledemo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Observabledemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
