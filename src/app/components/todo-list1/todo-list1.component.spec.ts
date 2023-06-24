import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoList1Component } from './todo-list1.component';

describe('TodoList1Component', () => {
  let component: TodoList1Component;
  let fixture: ComponentFixture<TodoList1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoList1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
