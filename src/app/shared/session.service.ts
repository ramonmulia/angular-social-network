import { Injectable } from '@angular/core';
import User from './user.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private SESSION_KEY = 'userLogged';

  getUserLogged() {
    return JSON.parse(sessionStorage.getItem(this.SESSION_KEY));
  }

  setUserLogged(user: User) {
    sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(user));
  }

  isUserLogged() {
    return !!sessionStorage.getItem(this.SESSION_KEY);
  }
}
