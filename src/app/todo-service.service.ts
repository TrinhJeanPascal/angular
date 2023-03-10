import { Injectable } from '@angular/core';
import { Todo } from './model/todo';

@Injectable()
export class TodoServiceService {
  constructor() {}

  public todos: Todo[] = [];

  getTodos(): Todo[] {
    return Array.from(this.todos);
  }

  createTodo(label: string): void {
    this.todos.push({
      label: label,
      done: false,
      id: Math.random() * 1000,
      creationDate: new Date().valueOf(),
    });
  }

  updateTodo(todo: Todo): void {
    return null;
  }
}
