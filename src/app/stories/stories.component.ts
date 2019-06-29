import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts/posts.service';
import { User } from '../entities/user.model';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  users:User[];

  constructor(private postsService : PostsService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.postsService.getUsers().subscribe(
      (data:User[])=>this.users=data,
      error=>console.error(error),
      ()=>console.log("OK")
    );
  }
}
