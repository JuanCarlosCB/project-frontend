import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user.model';
import { UserLoggedService } from '../user/user-logged.service';

@Component({
  selector: 'app-my-stories',
  templateUrl: './my-stories.component.html',
  styleUrls: ['./my-stories.component.css']
})
export class MyStoriesComponent implements OnInit {

  user:User;

  constructor(private userLoggedService:UserLoggedService) { }

  ngOnInit() {
    this.getUserLogged();
  }

  getUserLogged(){
    this.userLoggedService.getUserLogged().subscribe(
      (data:User)=>this.user=data,
      error=>console.error(error),
      ()=>console.log("OK")
    );
  }

}
