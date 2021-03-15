import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { environment } from './../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddComponent } from './add/add.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdddialogComponent } from './add/adddialog/adddialog.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { CourseComponent } from './course/course.component';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddComponent,
    AdddialogComponent,
    CourseComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    MatTableModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AngularFirestore
  ],
  bootstrap: [AppComponent],
  entryComponents: [AdddialogComponent],

})
export class AppModule { }
