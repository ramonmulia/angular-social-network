import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../shared/api.service';
import User from '../shared/user.model';
import Feed from '../shared/feed.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  feedList: Feed[] = [];
  friendList: User[] = [];
  feedListIsFetching = true;
  friendListIsFetching = true;

  constructor(private apiService: ApiService) { }

  newFeed(feed: Feed) {
    this.feedList.unshift(feed);
  }

  ngOnInit() {
    setTimeout(() => {
      this.apiService
        .getFeeds()
        .subscribe((data: Feed[]) => {
          this.feedList = data;
          this.feedListIsFetching = false;
        });

      this.apiService
        .getFriends()
        .subscribe((data: User[]) => {
          this.friendList = data;
          this.friendListIsFetching = false;
        });
    }, 1000);
  }
}
