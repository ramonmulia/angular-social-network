import { Component, OnInit, Input } from '@angular/core';
import User from '../shared/user.model';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  constructor() { }

  @Input() friendList: User[];

  ngOnInit() {
    this.friendList = [...this.friendList, ...this.friendList];
    console.log(this.friendList);
  }
}
