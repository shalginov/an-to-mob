import { Component } from '@angular/core';

class Todo {
  // title: string;
  // completed: boolean;
  // constructor (title: string, completed: boolean =false) {
    // this.title = title;
    // this.completed = completed;

  constructor (public title: string,
              public completed: boolean =false) {  }
}

interface ITodo {
  title: string;
  completed: boolean;
}

const todos: ITodo[] = [
  {
    title: 'Изучить JavaScript',
    completed: true
  },
  {
    title: 'Изучить Angular 9',
    completed: false
  },
  {
    title: 'Написать приложение',
    completed: false
  },

];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'todoist';
  todos: ITodo[] = todos;
  newTodoTitle: string = '';

  toggle(todo: ITodo){    
  todo.completed = !todo.completed    
  }

  delete(todo: ITodo){
    let index = this.todos.indexOf(todo);

    if(index > -1) {
      this.todos.splice(index, 1);
    }

  }

  create () {
    let todo = new Todo(this.newTodoTitle);
    this.todos.push(todo);
    this.newTodoTitle = '';
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
