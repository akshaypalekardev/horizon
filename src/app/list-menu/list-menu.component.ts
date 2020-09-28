import { Task } from './../task.model';
import { TaskServiceService } from './../task-service.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListServiceService } from '../list-service.service';
import { Todolist } from '../todolist.model';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnInit {

  toDoLists: Todolist[] = [];
  private toDoListItemSub: Subscription;
  private taskSub: Subscription;
  selectedListId: number;

  constructor(public listService: ListServiceService, private activeRoute: ActivatedRoute, public taskService: TaskServiceService) { }

  ngOnInit(): void {
    this.getToDoListItem();
  }

  getToDoListItem(): void {
    this.toDoListItemSub = this.listService.getToDoListListner().subscribe((returnedToDoLists: Todolist[]) => {
      this.toDoLists = returnedToDoLists;
    });
  }

}
