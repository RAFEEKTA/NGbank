import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor() { }
  ngOnInit(): void {

  }
  login() {

    alert("login clicked")


  }
acnochange(event:any){
console.log(event.target.value);

  }
}
