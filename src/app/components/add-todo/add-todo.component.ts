import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  addNewTodo(todoText: string) {
    this.todoService.create({ text: todoText });
  }
}
