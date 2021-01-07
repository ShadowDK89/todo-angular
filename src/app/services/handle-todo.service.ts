import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ITodo } from '../components/Models/ITodo';

@Injectable({
  providedIn: 'root'
})
export class HandleTodoService {
  private todoList:ITodo[] = [];
  private todo = new Subject<ITodo[]>();
  $todo = this.todo.asObservable();

  addTodo(newTodo:ITodo){
    this.todoList.push(newTodo);
    this.todo.next(this.todoList);
  }

  markAsDone(todoToMark: ITodo){
    this.todoList.forEach((todo) => {
      if(todo.id === todoToMark.id){
        todo.isFinished = !todo.isFinished;
      }
    });
  }

  removeFromList(todoToRemove:ITodo){
    this.todoList.forEach((todo, i:number) => {
      if(todo.id === todoToRemove.id){
        this.todoList.splice(i, 1);
      }
    });
  }

  sortList(id:number){

    if(id === 1){
      this.todoList.sort(function (a,b) {
      if(a.title.toLowerCase() < b.title.toLowerCase()) { return -1; }
      else if(a.title.toLowerCase() > b.title.toLowerCase()) { return 1; }
      return 0;
      });
    } else if(id === 2){
      this.todoList.sort(function (a,b) {
        if(a.added.getSeconds() > b.added.getSeconds()) { return -1 }
        else if(a.added.getSeconds() < b.added.getSeconds()) { return 1 }
        return 0;
      });
    } else {
      this.todoList.sort(function (a,b) { return a.id - b.id })
    }
    
  }

  constructor() { }
}
