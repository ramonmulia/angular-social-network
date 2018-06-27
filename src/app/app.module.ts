import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatDividerModule,
  MatFormFieldModule
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeedListComponent } from './feed-list/feed-list.component';
import { FeedItemComponent } from './feed-list/feed-item/feed-item.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { FeedInsertComponent } from './feed-insert/feed-insert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedListComponent,
    FeedItemComponent,
    FriendListComponent,
    UserCardComponent,
    FeedInsertComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    FlexLayoutModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
