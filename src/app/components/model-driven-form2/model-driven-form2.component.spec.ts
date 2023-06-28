import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenForm2Component } from './model-driven-form2.component';

describe('ModelDrivenForm2Component', () => {
  let component: ModelDrivenForm2Component;
  let fixture: ComponentFixture<ModelDrivenForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelDrivenForm2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelDrivenForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
