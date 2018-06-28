import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatDividerModule,
  MatFormFieldModule,
  MatFormFieldControl,
  MatInputModule
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentLoaderModule } from '@netbasal/content-loader';
import { GoogleLoginProvider, AuthServiceConfig, SocialLoginModule } from 'angular-6-social-login';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeedListComponent } from './feed-list/feed-list.component';
import { FeedItemComponent } from './feed-list/feed-item/feed-item.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { FeedInsertComponent } from './feed-insert/feed-insert.component';
import { HomeComponent } from './home/home.component';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('364529460928-qu5kbhuinh755l3dtdcqoc2k3j33u33t.apps.googleusercontent.com')
      }
    ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedListComponent,
    FeedItemComponent,
    FriendListComponent,
    UserCardComponent,
    FeedInsertComponent,
    HomeComponent
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
    MatInputModule,
    HttpClientModule,
    ContentLoaderModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
