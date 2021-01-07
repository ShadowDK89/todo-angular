import { Component, OnInit } from '@angular/core';
import { HandleTodoService } from 'src/app/services/handle-todo.service';
import { ITodo } from '../Models/ITodo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todoList:ITodo[] = [];

  constructor(private service: HandleTodoService) { }

  ngOnInit(): void {
    this.service.$todo.subscribe((list) => { this.todoList = list });
  }


}
