import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenFormComponent } from './model-driven-form.component';

describe('ModelDrivenFormComponent', () => {
  let component: ModelDrivenFormComponent;
  let fixture: ComponentFixture<ModelDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelDrivenFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
