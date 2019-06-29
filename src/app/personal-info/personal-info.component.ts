import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user.model';
import { UserLoggedService } from '../user/user-logged.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

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
