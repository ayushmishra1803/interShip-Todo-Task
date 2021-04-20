import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  constructor() {}
  todo = [{ name: 'HEllo World', description: 'Hello Ayush' }];
  changedTodo = new Subject();
  getToList() {
    const todo = JSON.parse(localStorage.getItem('Todo'));

    this.todo = todo;

    return this.todo.slice();
  }
  addToDo(toDo) {
    this.todo.push(toDo);
    this.changedTodo.next(this.todo.slice());
    localStorage.setItem('Todo', JSON.stringify(this.todo));
  }
  removeFromTODO(index) {
    this.todo.splice(index, 1);
    this.changedTodo.next(this.todo.slice());
    localStorage.setItem('Todo', JSON.stringify(this.todo));
  }
  editToDoElemet(index, newTodo) {
    this.todo[index] = newTodo;
    this.changedTodo.next(this.todo.slice());
    localStorage.setItem('Todo', JSON.stringify(this.todo));
  }
}
