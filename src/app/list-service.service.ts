import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todolist} from './todolist.model';



@Injectable({
  providedIn: 'root'
})
export class ListServiceService {
  private toDoListItem = new BehaviorSubject<Todolist[]>([]);

  constructor(private router: Router, private route: ActivatedRoute) { }

  //Listner
  getToDoListListner() {
    return this.toDoListItem.asObservable();
  }

  //Adding a new To Do List
  addNewToDoList(toDoListName: string){
    const toDoListId = new Date().valueOf();
    const toDoList: Todolist = {
      id: toDoListId,
      listName: toDoListName,
      numberOfTask:0
    }
    let newToDoListMenu = [...this.toDoListItem.value];
    newToDoListMenu.push(toDoList);
    this.toDoListItem.next(newToDoListMenu);
    this.router.navigate(['/list', toDoListId]);
  }

}
