import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name
  password

  constructor(private router: Router) { }


  ngOnInit() {
    if(localStorage.getItem('isLoggedIn') == 'true'){
      this.router.navigate(['/list']);
    }

  }
  login(){
    if(this.name == 'pupaadmin' && this.password == 'admin@pupa'){
      this.router.navigate(['/list']);
      localStorage.setItem('isLoggedIn','true');
    }
  }

}
