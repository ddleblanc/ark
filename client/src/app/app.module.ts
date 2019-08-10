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
    BottomsheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PostService],
  entryComponents: [BottomsheetComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
