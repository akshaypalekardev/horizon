import { DeleteConfirmationDialogComponent } from './../delete-confirmation-dialog/delete-confirmation-dialog.component';
import { TaskEditDialogComponent } from './../task-edit-dialog/task-edit-dialog.component';
import { Task } from './../task.model';
import { TaskServiceService } from './../task-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { element } from 'protractor';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {
  taskList: Task[] = [];
  private taskSub: Subscription;
  selectedListId: number;

  constructor(public taskService: TaskServiceService, private route: ActivatedRoute, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedListId = Number(params.get('id'));
      this.getTaskList(this.selectedListId);
    });
  }

  getTaskList(selectedListId: number): void {
    this.taskSub = this.taskService.getTaskUpdateListner().subscribe((tasks: Task[]) => {
      this.taskList = tasks.filter((el) => {
        return el.listId == selectedListId;
      });
    });
  }

  //Edit Modal
  openEditModal(task: Task): void {
    const dialogRef = this.dialog.open(TaskEditDialogComponent, {
      width: '250px',
      data: task
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  //Delete Modal
  openDeleteModal(taskId: number): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '250px',
      data: {
        element: 'task'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.taskService.deleteTask(taskId);
        this.openSnackBar();
      }
    });
  }

  openSnackBar(): void {
    this._snackBar.open('Task Deleted', 'Dismiss', {
      duration: 2000,
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.taskList, event.previousIndex, event.currentIndex);
  }

  ngOnDestroy(): void {
    this.taskSub.unsubscribe();
  }

}
