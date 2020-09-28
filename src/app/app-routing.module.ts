import { NoComponentComponent } from './no-component/no-component.component';
import { TaskContainerComponent } from './task-container/task-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component'

const routes: Routes = [
  { path: '', component: NoComponentComponent },
  { path: 'list/:id', component: TaskContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
