import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list1',
  templateUrl: './todo-list1.component.html',
  styleUrls: ['./todo-list1.component.css'],
})
export class TodoList1Component implements OnInit {
  todos$: any;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.todoObs;
    console.log(this.todos$);
  }
  deleteTodo(id: number) {
    this.todoService.remove(id);
  }
  toggleTodo(id: number) {
    this.todoService.toggle(id);
  }
}
