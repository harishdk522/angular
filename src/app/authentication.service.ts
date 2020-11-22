import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  users = [
    {usernme: 'sam', password: 'sam@1234', role: 'user'},
    {usernme: 'bob', password: 'bob@1234', role: 'admin'}
  ];

  constructor() {}

  // tslint:disable-next-line:ban-types
  authenticateUser(uname: string, password: string): String{
    let role = '';
    for (const user of this.users){
      if (user.usernme === uname && user.password === password){
        role = user.role;
      }
    }
    return role;
  }

  getUserData(): string {
    return localStorage.getItem('currentUser');
  }

  setUserData(role: string): void {
    localStorage.setItem('currentUser', role);
  }

  removeUserData(): void {
    localStorage.removeItem('currentUser');
  }

  getUserName(role: string): string {
    let username = '';
    for (const user of this.users){
      if (role && (user.role.toLowerCase() === role.toLowerCase())){
        username = user.usernme;
      }
    }
    return username;
  }
}
