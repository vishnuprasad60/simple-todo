import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {Todo} from '../components/model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        id: '11',
        title: 'cpp',
        isCompleted: true,
        date: new Date(),
      },
      {
        id: '22',
        title: 'react',
        isCompleted: true,
        date: new Date(),
      },
      {
        id: '33',
        title: 'angular',
        isCompleted: false,
        date: new Date(),
      }
    ];
  }

  getTodos() {
    return of(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  changeStatus(todo: Todo) {
    this.todos.map(selectTodo => {
      if(selectTodo.id == todo.id)
        todo.isCompleted = !todo.isCompleted;
    });
  }

  deleteTodo(todo: Todo) {
    const idx = this.todos.findIndex(
      (currentObj) => currentObj.id === todo.id,
    );
    this.todos.splice(idx,1);
  }

}
