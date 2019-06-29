import { Component, OnInit, Input } from '@angular/core';
import { User } from '../entities/user.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() user:User;

  constructor() { }

  ngOnInit() {
  }


}
