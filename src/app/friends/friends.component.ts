import { Component, OnInit, Input } from '@angular/core';
import { Friend } from '../entities/friend.model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  @Input() friend:Friend[];

  constructor() { }

  ngOnInit() {
  }

}
