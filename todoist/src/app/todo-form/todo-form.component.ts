import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({  
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  
  title: string = '';
  @Output() add =new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }


  onSubmit () {
    this.add.emit(this.title);
  }


}
