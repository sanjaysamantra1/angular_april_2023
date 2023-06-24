import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const initialTodos = [
  { id: 1, text: 'Todo 1', completed: false },
  { id: 2, text: 'Todo 2', completed: true },
];

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoSubject = new BehaviorSubject(initialTodos);
  readonly todoObs = this.todoSubject.asObservable();

  private todosArr: any = initialTodos;
  private nextId = 2;
  create(item: any) {
    item.id = ++this.nextId;
    item.completed = false;
    this.todosArr.push(item);
    this.todoSubject.next(Object.assign([], this.todosArr));
  }
  remove(id: any) {
    this.todosArr.forEach((todo: { id: any }, ind: any) => {
      if (todo.id === id) {
        this.todosArr.splice(ind, 1);
      }
      this.todoSubject.next(Object.assign([], this.todosArr));
    });
  }
  toggle(id: number) {
    this.todosArr = this.todosArr.map((todo: any) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.todoSubject.next(this.todosArr);
  }
}
