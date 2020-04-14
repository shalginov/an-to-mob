import { Component, OnInit, Input } from '@angular/core';

import { Todo } from '../shared/todo';
import { TodoService } from '../shared/todo.service';



@Component({ 
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[] ;

  
  constructor() {
    
   }

  ngOnInit(): void {
  }

  
  toggle(todo: Todo){    
    todo.completed = !todo.completed    
    }
  
    delete(todo: Todo){
      let index = this.todos.indexOf(todo);
  
      if(index > -1) {
        this.todos.splice(index, 1);
      }
  
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
