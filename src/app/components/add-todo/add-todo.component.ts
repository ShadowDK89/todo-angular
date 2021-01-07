import { Component, OnInit } from '@angular/core';
import { HandleTodoService } from 'src/app/services/handle-todo.service';
import { ITodo } from '../Models/ITodo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor(private service: HandleTodoService) { }
  newId = 0;
  newTodo = '';

  updateTodo(currentTodo: string){
    this.newTodo = currentTodo;
  }

  addNewTodo(){
    if(this.newTodo != ''){
    let newTodoObj:ITodo = {id: ++this.newId, title: this.newTodo, added: new Date(), isFinished: false};
    this.service.addTodo(newTodoObj);
    this.newTodo = '';
    }
  }

  ngOnInit(): void {

  }

}
