import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CreateListComponent } from './create-list/create-list.component';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateListDialogComponent } from './create-list-dialog/create-list-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TaskContainerComponent } from './task-container/task-container.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TaskComponent } from './task/task.component';
import { NoComponentComponent } from './no-component/no-component.component';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { TaskEditDialogComponent } from './task-edit-dialog/task-edit-dialog.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog/delete-confirmation-dialog.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CreateListComponent,
    ListMenuComponent,
    CreateListDialogComponent,
    TaskContainerComponent,
    TaskListComponent,
    TaskCreateComponent,
    TaskComponent,
    NoComponentComponent,
    TaskEditDialogComponent,
    DeleteConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    DragDropModule,
    MatCardModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatSelectModule,
    MatNativeDateModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
