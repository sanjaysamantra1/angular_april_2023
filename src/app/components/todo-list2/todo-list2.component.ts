import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list2',
  templateUrl: './todo-list2.component.html',
  styleUrls: ['./todo-list2.component.css']
})
export class TodoList2Component implements OnInit {

  todos$: any;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.todoObs;
  }
  deleteTodo(id: number) {
    this.todoService.remove(id);
  }

}
