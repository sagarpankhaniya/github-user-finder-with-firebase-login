import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedin = false;

  constructor(private firebase : FirebaseService) { }
  
  ngOnInit(): void {

    this.isLoggedin=this.firebase.isloggedin;
   
  }
}
