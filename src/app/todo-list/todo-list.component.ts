import { ApplicationModule, Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [CommonModule, ApplicationModule, TodoItemComponent],
})
export class TodoListComponent implements OnInit {
  public todos: Todo[] = [
    { label: 'Manger', done: true },
    { label: 'Dormir', done: false },
    { label: 'Faire les courses', done: false },
  ];
  constructor() {}
  fonction(tache: Todo) {
    tache.done ? (tache.done = false) : (tache.done = true);
  }

  add(tache: string) {
    let elem = { label: tache, done: false };
    this.todos.push(elem);
  }

  ngOnInit() {}
}
