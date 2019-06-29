import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user.model';
import { History } from '../entities/history.model';
import { UserLoggedService } from '../user/user-logged.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  user : User;
  message : string;
  constructor(private userLoggedService : UserLoggedService) { }

  ngOnInit() {
    this.userLoggedService.getUserLogged().subscribe( (data:User) => this.user = data);
    this.user = new User();
    //this.userLoggedService.getUserLogged();
  }

  pushMessage(message: History):void {
         if (this.user.stories === undefined) {
             this.user.stories = new Array();
         }
         this.user.stories.push(message);
     }

  saveMessageUserLogged(){
    //1. Creo el nuevo mensaje a partir del texto del textarea (message)
   let myMessage = new History(this.message);
   //2. Añado el mensaje al array de stories del usuario
   this.pushMessage(myMessage);
   //3. Posteo el usuario que ya tiene el storie en su array
   return this.userLoggedService.saveMessageUserLogged(this.user).subscribe();
  }
}
