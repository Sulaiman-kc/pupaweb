import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'add', component: AddComponent },
  { path: 'course', component: CourseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: TodoListComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
