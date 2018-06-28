import { Component, Input } from '@angular/core';
import Feed from '../../shared/feed.model';
import User from '../../shared/user.model';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.css']
})
export class FeedItemComponent {
  constructor() { }

  @Input() feed: Feed;

  getUserImage(user: User) {
    return {
      backgroundImage: `url(${user.photo})`,
      backgroundRepeat: 'round'
    };
  }
}
