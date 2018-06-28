import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Feed from './feed.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  API_URL = 'https://5b3146b77ad3350014b433b5.mockapi.io/api/v1/';

  constructor(private httpClient: HttpClient) { }

  postFeed(feed: Feed) {
    return this.httpClient.post(`${this.API_URL}/feeds`, feed);
  }

  getFeeds() {
    return this.httpClient.get(`${this.API_URL}/feeds`);
  }

  getFriends() {
    return this.httpClient.get(`${this.API_URL}/friends`);
  }
}
