import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/service/todo-service.service';

@Component({
  selector: 'app-input-section',
  templateUrl: './input-section.component.html',
  styleUrls: ['./input-section.component.scss'],
})
export class InputSectionComponent implements OnInit {
  constructor(private Service: TodoServiceService) {}
  todo;
  todoDescription;

  ngOnInit(): void {}
  onSave() {
    const todo = {
      name: this.todo,
      description: this.todoDescription,
    };
    this.Service.addToDo(todo);
  }
}
