import { Component, Input, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/service/todo-service.service';

@Component({
  selector: 'app-to-dolist',
  templateUrl: './to-dolist.component.html',
  styleUrls: ['./to-dolist.component.scss'],
})
export class ToDolistComponent implements OnInit {
  constructor(private service: TodoServiceService) {}
  @Input() Todoitem;
  @Input() index;
  edit = false;
  ngOnInit(): void {}
  OnEdit() {
    this.edit = !this.edit;
  }
  removeToDo() {
    this.service.removeFromTODO(this.index);
  }
  saveEdited() {
    this.service.editToDoElemet(this.index, this.Todoitem);
    this.edit = false;
  }
}
