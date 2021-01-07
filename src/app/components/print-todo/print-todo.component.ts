import { Component, OnInit } from '@angular/core';
import { HandleTodoService } from 'src/app/services/handle-todo.service';
import { ITodo } from '../Models/ITodo';

@Component({
  selector: 'app-print-todo',
  templateUrl: './print-todo.component.html',
  styleUrls: ['./print-todo.component.scss']
})
export class PrintTodoComponent implements OnInit {

  listToPrint:ITodo[] = [];

  constructor(private service: HandleTodoService) { }

  ngOnInit(): void {
    this.service.$todo.subscribe((list) => { this.listToPrint = list }); 
  }

  isDone(handleTodo: ITodo){
    this.service.markAsDone(handleTodo);
  }

  sortList(sortId: number){
    this.service.sortList(sortId);
  }

  deleteTodo(todo: ITodo){
    this.service.removeFromList(todo);
  }

}
