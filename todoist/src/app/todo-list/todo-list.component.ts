import { Component, OnInit} from '@angular/core';

import { Todo } from '../shared/todo';
import { TodoService } from '../todo.service';


@Component({ 
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] ;

  
  constructor(private todoService: TodoService) {
    this.todos = [];
   }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  
  toggle(todo: Todo){    
    this.todoService.toggleTodo(todo);
    }
  
    delete(todo: Todo){
      this.todoService.deleteTodo(todo);
    }
  
    
    // create(event: Event, title: string){
    // event.preventDefault();
    //   // let todo: Todo = {
    //   //   title: title,
    //   //   completed: false
    //   // }
  
    //   let todo: Todo = new Todo(title)
  
    //   this.todos.push(todo)
  
    // }
  
  
    //Такой подход не рекомендуется т.к. мешает DOM элементы и логику
    // create(event: Event, input: HTMLInputElement){
    //   event.preventDefault();
   
    //     let todo: Todo = new Todo(input.value);
    
    //     this.todos.push(todo);
  
    //     input.value = '';
    
    //   }
    
  

}
