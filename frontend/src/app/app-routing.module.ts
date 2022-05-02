import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditListComponent } from './pages/edit-list/edit-list.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';

const routes: Routes = [
  {path : '' , redirectTo : 'lists' , pathMatch : 'full'},
  {path : 'login' , component : LoginpageComponent},
  {path : 'edit/:listId' , component : EditListComponent},
  {path : 'new-list' , component : NewListComponent},
  {path : 'lists' , component: TaskViewComponent },
  {path : 'lists/:listId' , component:TaskViewComponent},
  {path : 'lists/:listId/new-task' , component : NewTaskComponent},
  {path : 'lists/:listId/edittask/:taskId', component : EditTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
