import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routes';
import { PostComponent } from './post/post.component';
import { BoxComponent } from './box/box.component';
import { StoriesComponent } from './stories/stories.component';
import { PostsComponent } from './posts/posts.component';
import { EventsComponent } from './events/events.component';
import { UserLoggedService } from './user/user-logged.service';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './posts/posts.service';
import { FormsModule } from "@angular/forms";
import { Box2Component } from './box2/box2.component';
import { ListFriendsComponent } from './list-friends/list-friends.component';
import { FriendsComponent } from './friends/friends.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { MyStoriesComponent } from './my-stories/my-stories.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { Box3Component } from './box3/box3.component';
import { SearchComponent } from './search/search.component';
import { FriendsService } from './friends/friends.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserComponent,
    PostComponent,
    BoxComponent,
    StoriesComponent,
    PostsComponent,
    EventsComponent,
    Box2Component,
    ListFriendsComponent,
    FriendsComponent,
    PersonalInfoComponent,
    MyStoriesComponent,
    MyPostsComponent,
    Box3Component,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserLoggedService, PostsService, FriendsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
