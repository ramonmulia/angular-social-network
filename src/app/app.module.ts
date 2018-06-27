import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeedListComponent } from './feed-list/feed-list.component';
import { FeedItemComponent } from './feed-list/feed-item/feed-item.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { FriendItemComponent } from './friend-list/friend-item/friend-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedListComponent,
    FeedItemComponent,
    FriendListComponent,
    FriendItemComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
