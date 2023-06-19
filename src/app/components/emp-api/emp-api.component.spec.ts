import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpApiComponent } from './emp-api.component';

describe('EmpApiComponent', () => {
  let component: EmpApiComponent;
  let fixture: ComponentFixture<EmpApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
