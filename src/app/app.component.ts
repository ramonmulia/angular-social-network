import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login';

import { SessionService } from './shared/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private socialAuthService: AuthService, private sessionService: SessionService) { }

  userLogged = false;

  ngOnInit() {
    this.userLogged = !!this.sessionService.isUserLogged();
  }

  socialSignIn() {
    const socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService
      .signIn(socialPlatformProvider)
      .then(
        userData => {
          const user = {
            id: userData.id,
            email: userData.email,
            name: userData.email,
            photo: userData.image
          };
          this.sessionService.setUserLogged(user);
          this.userLogged = true;
        }
      );
  }
}
