import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { todo } from '../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class TodoListComponent implements OnInit {
  public todo: todo[] = [
    { label: 'Tache1', done: true },
    { label: 'Tache2', done: false },
  ];
  constructor() {}

  updateTodoList(todo: todo) {
    todo.done = !todo.done;
  }

  ngOnInit() {}
}
