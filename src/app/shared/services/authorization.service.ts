import { Injectable } from '@angular/core';
import { USERS } from '../mock-data/data-users';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  usersList = USERS;

  constructor() { }

  login(data: any): any {
    const currentUser = this.usersList.find((user) => user.login === data.login);
    if(!currentUser) {
      return {
        status: 0,
        message: 'wrong login',
      }
    } else {
      if(currentUser.password !== data.password) {
        return {
          status: 1,
          message: 'wrong password',
        }
      } else {
        this.setCurrentUser(data.login);
        return {
          status: 2,
          message: 'welcome',
        }
      }
    }
  }

  setCurrentUser(login: string): void {
    localStorage.setItem('user', login);
  }

  getCurrentUser(): string {
    return localStorage.getItem('user');
  }

  removeCurrentUser(): void {
    localStorage.removeItem('user');
  }
}
