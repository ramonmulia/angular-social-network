import { Component, OnInit, Input } from '@angular/core';
import Feed from '../shared/feed.model';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css']
})
export class FeedListComponent{

  constructor() { }

  @Input() feedList: Feed[];
}
