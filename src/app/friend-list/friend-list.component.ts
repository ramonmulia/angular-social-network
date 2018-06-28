import { Component, Input } from '@angular/core';
import User from '../shared/user.model';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent {

  constructor() { }

  @Input() friendList: User[];
}
