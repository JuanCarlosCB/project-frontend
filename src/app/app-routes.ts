import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxComponent } from './box/box.component';
import { Box2Component } from './box2/box2.component';
import { Box3Component } from './box3/box3.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: BoxComponent },
  { path: 'things', component: Box2Component },
  { path: 'friends', component: Box3Component}
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
