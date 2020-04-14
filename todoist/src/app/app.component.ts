import { Component, Input } from '@angular/core';

import { Todo } from './shared/todo'
import { todos } from './shared/data'

interface ITodo {
  title: string;
  completed: boolean;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title: string = "Todoist";
@Input() todos: Todo[] = todos;

create(title:string) {
  const todo = new Todo(title);
  todos.push(todo);
}

}
