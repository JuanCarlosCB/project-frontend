import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends/friends.service';
import { Friend } from '../entities/friend.model';

@Component({
  selector: 'app-list-friends',
  templateUrl: './list-friends.component.html',
  styleUrls: ['./list-friends.component.css']
})
export class ListFriendsComponent implements OnInit {

  friends:Friend[];

  constructor(private friendsService:FriendsService) { }

  ngOnInit() {
    this.getFriendsFromUser();
  }

  getFriendsFromUser(){
    this.friendsService.getFriendsFromUser().subscribe(
      (data:Friend[])=>this.friends=data,
      error=>console.error(error),
      ()=>console.log("OK")
    );
  }

}
