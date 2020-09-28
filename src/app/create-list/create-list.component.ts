import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateListDialogComponent } from '../create-list-dialog/create-list-dialog.component'
import { ListServiceService } from '../list-service.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  listName: string;

  constructor(public dialog: MatDialog, public listService: ListServiceService) { }

  ngOnInit(): void {
  }

  openCreateListDialog(): void {
    const dialogRef = this.dialog.open(CreateListDialogComponent, {
      data: {
        listName: this.listName
      }
    });

    //If the user has entered a name, call the list service and to the list-menu
    dialogRef.afterClosed().subscribe(result => {
      if (typeof result != "undefined") {
        if (result.trim().length > 0) {
          this.listService.addNewToDoList(result);
        }
      }
    });
  }

}
