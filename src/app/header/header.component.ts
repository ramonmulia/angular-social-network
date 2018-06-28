import { Component, OnInit } from '@angular/core';
import { SessionService } from '../shared/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user = null;

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.user = this.sessionService.getUserLogged();
  }
}
