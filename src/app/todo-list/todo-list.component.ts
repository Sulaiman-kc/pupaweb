import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  items: any[];
  constructor(private db: AngularFirestore, private router: Router) { }

  ngOnInit() {
    console.log(localStorage.getItem('isLoggedIn'));
    
    if(localStorage.getItem('isLoggedIn') != 'true'){
      this.router.navigate(['/login']);
    }
    this.db.collection('recCollege').snapshotChanges().subscribe(data => {
      this.items = [];
      data.forEach(a => {
        const item: any = a.payload.doc.data();
        console.log(item);
        
        item.id = a.payload.doc.id;
        this.items.push(item);
      });
    });
  }
  logout(){
    localStorage.setItem('isLoggedIn','false');
    this.router.navigate(['/login']);
  }
  add() {
    this.db.collection(`items`).add({
      timestamp: new Date()
    });
  }

  update(item) {
    console.log(item);
    this.router.navigate(['/add' ,{data: JSON.stringify(item), type: 'edit'}]);
    // this.db.doc(`items/${item.id}`).update({
    //   timestamp: new Date()
    // });
  }

  delete(item) {
    this.db.doc(`items/${item.id}`).delete();
  }

}
