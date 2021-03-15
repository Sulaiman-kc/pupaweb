import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-adddialog',
  templateUrl: './adddialog.component.html',
  styleUrls: ['./adddialog.component.css']
})
export class AdddialogComponent implements OnInit {
  course: [];
  title = '';
  cou = {};
  items = [];
  url:any = '';
  urls:any = [];
  engineering = [];
  degree: any = [];
  medical: any = [];
  others: any = [];
  constructor(private db: AngularFirestore,
    public dialogRef: MatDialogRef<AdddialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.urls = data.item;
    }

  onNoClick(): void {
    var item = this.urls;
    this.data.item = item
    this.dialogRef.close();
  }
  ngOnInit() {
    this.course = this.data.course
    this.title = this.data.type
  }


  test(){
    var url;
    if(this.title == 'key_specs'){
      url = {name:this.url.split(',')[0], spec:this.url.split(',')[1]}
      this.urls.push(url); 
    }
    else{
      this.urls.push(this.url);
    }
    console.log(this.urls);
    this.url = '';
    this.data.item = this.urls
  }

  delete(url){
    console.log(url);
    var i = this.urls.findIndex(rank => rank == url);
    this.urls.splice(i, 1)
    this.data.item = this.urls
    // JSON.stringify
  }
  // getEngineering(type){
  //   if(type == 'Engineering'){
  //     this.engineering = item['course'];
  //     console.log(this.engineering);
      
  //   }
  //   if(type == 'Management_degree'){
  //     this.degree = item['course'];
  //   }
  //   if(type == 'Medical'){
  //     this.medical = item['course'];
  //   }
  //   if(type == 'Others'){
  //     this.others = item['course'];
  //   }
}
