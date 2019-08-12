import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FeedComponent } from './components/home/feed/feed.component';
import { PopularComponent } from './components/home/popular/popular.component';
import { MessagesComponent } from './components/messages/messages.component';
import { CreateComponent } from './components/create/create.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { UserComponent } from './components/user/user.component';
import { VideosComponent } from './components/videos/videos.component';
import { PostDetailReviewComponent } from './components/post-detail/post-detail-review/post-detail-review.component';
import { PostDetailSummaryComponent } from './components/post-detail/post-detail-summary/post-detail-summary.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'feed', component: FeedComponent },
      { path: 'popular', component: PopularComponent }
    ]
  },
  { path: 'profile', component: ProfileComponent },
  { path: 'user/:username', redirectTo: 'user/:username/videos', pathMatch: 'full' },
  {
    path: 'user/:username', component: UserComponent,
    children: [
      { path: 'videos', component: VideosComponent }
    ]
  },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'create', component: CreateComponent },
  { path: 'discover', component: DiscoverComponent },
  {
    path: 'post/:_id', component: PostDetailComponent, children: [
      { path: 'review', component: PostDetailReviewComponent },
      { path: 'summary', component: PostDetailSummaryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
