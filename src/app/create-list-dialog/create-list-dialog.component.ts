import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Todolist } from '../todolist.model';


@Component({
  selector: 'app-create-list-dialog',
  templateUrl: './create-list-dialog.component.html',
  styleUrls: ['./create-list-dialog.component.css']
})
export class CreateListDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateListDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: Todolist) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
