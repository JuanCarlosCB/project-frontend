import { Component, OnInit, Input } from '@angular/core';
import { User } from '../entities/user.model';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  @Input() user:User;
  constructor() { }

  ngOnInit() {
  }

}
