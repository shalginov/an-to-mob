import { Injectable } from '@angular/core';

import { Todo } from './shared/todo'
import { todos } from './shared/data'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todos: Todo[] = todos;

  getTodos(): Todo[] {
    return this.todos;
  }

  createTodo(title: string){
    let todo = new Todo (title);
    todos.push(todo);
  }

  deleteTodo(todo: Todo){
    let index = this.todos.indexOf(todo);  
    if(index > -1) {
      this.todos.splice(index, 1);
    }
  }

  toggleTodo(todo: Todo){
    todo.completed = !todo.completed;
  }
}
