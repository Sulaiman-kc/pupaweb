import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AdddialogComponent } from './adddialog/adddialog.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  stream = ['Engineering','Medical','Management_degree','Others']
  constructor(public dialog: MatDialog, private db: AngularFirestore, private router: Router,private arouter: ActivatedRoute ) {
    console.log(arouter.snapshot.queryParamMap); // this
    arouter.params.subscribe( params => console.log(params) );
   }
  data
  item = [];
  image = [];
  eng = [];
  med = [];
  oth = [];
  deg = [];
  key = [];
  heading = ''
  place = ''
  type = ''
  Description = ''
  ngOnInit() {
    if(localStorage.getItem('isLoggedIn') != 'true'){
      this.router.navigate(['/login']);
    }
    // var quiz_id = this.arouter.snapshot.params;
    this.arouter.paramMap.subscribe(params => {
      this.type = params.get('type');
      if(params.get('type') == 'edit'){
        console.log((params.get('data')));
        this.data = JSON.parse(params.get('data'));
        console.log((this.data));
        this.image = this.data.image;
        this.eng = this.data.Engineering;
        this.med = this.data.Medical;
        this.deg = this.data.Management_degree;
        this.oth = this.data.Others;
        this.key = this.data.key_specs;
        this.heading = this.data.title;
        this.place = this.data.place;
        this.Description = this.data.Description;
      }
    });
  }
  save(){
    console.log('hello');
    
    var strem = [];
    if(this.eng.length != 0){
      strem.push('Engineering');
    }
    if(this.deg.length != 0){
      strem.push('Management_degree');
    }
    if(this.med.length != 0){
      strem.push('Medical');
    }
    if(this.oth.length != 0){
      strem.push('Others');
    }
    const newId = this.type == 'edit'? this.data.id: this.db.createId();
    console.log(this.heading);
    console.log(this.image);
    console.log(this.place);
    
    if(this.heading != '' && this.place != '' && this.image.length != 0){
      console.log('hello111111');
      this.db.collection("recCollege").doc(newId).set({
        title:this.heading,
        Description: this.Description,
        id: newId,
        place: this.place,
        Engineering: this.eng,
        Management_degree: this.deg,
        Medical: this.med,
        Others: this.oth,
        image: this.image,
        key_specs: this.key,
        stream: strem,
        isAvailable: true
      })
      this.router.navigate(['/list']);
    }
    
  }
  openDialog(type): void {
    if(type == 'Engineering'){
      this.item = this.eng;
    }
    if(type == 'Management_degree'){
      this.item = this.deg;
    }
    if(type == 'Medical'){
      this.item = this.med;
    }
    if(type == 'Others'){
      this.item = this.oth;
    }
    if(type == 'Image'){
      this.item = this.image;
    }
    if(type == 'key_specs'){
      this.item = this.key;
    }

    const dialogRef = this.dialog.open(AdddialogComponent, {
      width: '350px',
      height: '450px',
      data: {course: this.stream, type:type, item: this.item}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result != undefined){
        this.item = result.item;
        var type = result.type;
        console.log(this.item);
          if(type == 'Engineering'){
            this.eng = this.item;
          }
          if(type == 'Management_degree'){
            this.deg = this.item;
          }
          if(type == 'Medical'){
            this.med = this.item;
          }
          if(type == 'Others'){
            this.oth = this.item;
          }
          if(type == 'Image'){
            this.image = this.item;
          }
      }
    });
  }
  test(){
    console.log(this.eng);
    console.log(this.deg);
    console.log(this.med);
    console.log(this.oth);
    
  }
}
