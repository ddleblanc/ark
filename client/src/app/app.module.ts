import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list/post-list-item/post-list-item.component';
import { FeedComponent } from './components/home/feed/feed.component';
import { PopularComponent } from './components/home/popular/popular.component'
import { PostService } from './services/post.service';
import { MessagesComponent } from './components/messages/messages.component';
import { CreateComponent } from './components/create/create.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { SafePipe } from './pipes/safe.pipe';
import { BottomsheetComponent } from './components/bottomsheet/bottomsheet.component';
import { UserComponent } from './components/user/user.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideosComponent } from './components/videos/videos.component';
import { CommentComponent } from './components/comment/comment.component';
import { TimaAgoPipe } from './pipes/timeAgo.pipe';
import { RatingComponent } from './components/post-detail/rating/rating.component';
import { PostDetailReviewComponent } from './components/post-detail/post-detail-review/post-detail-review.component';
import { PostDetailSummaryComponent } from './components/post-detail/post-detail-summary/post-detail-summary.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { HttpClientModule } from '@angular/common/http';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 1
};


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    FavoritesComponent,
    PostListComponent,
    PostListItemComponent,
    FeedComponent,
    PopularComponent,
    MessagesComponent,
    CreateComponent,
    DiscoverComponent,
    PostDetailComponent,
    SafePipe,
    TimaAgoPipe,
    BottomsheetComponent,
    UserComponent,
    VideoListComponent,
    VideosComponent,
    CommentComponent,
    RatingComponent,
    PostDetailReviewComponent,
    PostDetailSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    HttpClientModule,
  ],
  providers: [PostService, {
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  entryComponents: [BottomsheetComponent, CommentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
