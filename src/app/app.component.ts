import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from './service/todo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private service: TodoServiceService) {}
  ngOnInit(): void {
    this.todo = this.service.getToList();
    this.service.changedTodo.subscribe((todo) => {
      this.todo = todo;
    });
  }
  title = 'IntershipTask';
  todo;
}
