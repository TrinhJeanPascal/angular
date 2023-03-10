import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  standalone: true,
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo;

  @Output()
  newItemEvent = new EventEmitter<string>();

  ping() {
    this.newItemEvent.emit('');
  }
  ngOnInit() {}
}
