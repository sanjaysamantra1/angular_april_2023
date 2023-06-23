import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subjectdemo1Component } from './subjectdemo1.component';

describe('Subjectdemo1Component', () => {
  let component: Subjectdemo1Component;
  let fixture: ComponentFixture<Subjectdemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subjectdemo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subjectdemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
