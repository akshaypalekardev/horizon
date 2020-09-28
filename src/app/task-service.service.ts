import { Task } from './task.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private updatedTasks = new BehaviorSubject<Task[]>([]);

  constructor() { }

  //Listner
  getTaskUpdateListner() {
    return this.updatedTasks.asObservable();
  }

  //Adding a task
  addTask(todo: string,selectedListId: number){
    const id = new Date().valueOf();
    const task: Task = {
      id: id,
      listId: selectedListId,
      todo: todo,
      description:'',
      status:'Draft',
      priority:'Medium',
      dueDate:new Date()
    }
    let newTaskList = [...this.updatedTasks.value];
    newTaskList.push(task);
    this.updatedTasks.next(newTaskList);
  }

  //Delete a task
  deleteTask(taskId: number) {
    let newTaskList = [...this.updatedTasks.value];
    newTaskList = newTaskList.filter(el => el.id != taskId);
    this.updatedTasks.next(newTaskList);
  }
}
