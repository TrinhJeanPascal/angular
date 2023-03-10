import { ApplicationModule, Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoServiceService } from '../todo-service.service';

declare var M: any;

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [CommonModule, ApplicationModule, TodoItemComponent],
  providers: [TodoServiceService],
})
export class TodoListComponent implements OnInit {
  public toInsert: string;
  userService: TodoServiceService;
  todos: Todo[];

  constructor(userService: TodoServiceService) {
    this.userService = userService;
  }

  fonction(tache: Todo) {
    tache.done ? (tache.done = false) : (tache.done = true);
  }

  /*
  add(tache: string, id: number, date: number) {
    let elem: Todo = { label: tache, done: false, id: id, creationDate: date };
    this.todos.push(elem);
    M.toast({ html: 'La tâche a été ajouté', classes: 'rounded' });
  }
  */

  insertTodo() {
    if (this.toInsert != null) {
      this.userService.createTodo(this.toInsert);
      this.todos = this.userService.getTodos();
      this.toInsert = null;
      M.toast({ html: 'La tâche a été ajouté', classes: 'rounded' });
    }
  }

  ngOnInit() {
    this.todos = this.userService.getTodos();
  }
}
