import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user.model';
import { UserLoggedService } from './user-logged.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userLogged:User;
  constructor(private userLoggedService : UserLoggedService) { }

  ngOnInit() {
    this.getUserLogged();
  }

  getUserLogged(){
    this.userLoggedService.getUserLogged().subscribe(
      (data:User)=>this.userLogged=data,
      error=>console.error(error),
      ()=>console.log("OK")
    );
  }
}
