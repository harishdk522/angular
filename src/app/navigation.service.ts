import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  navigationOptions = [];
  constructor() {
    this.navigationOptions = [
      {dName : 'About Us', name : 'about'},
      {dName : 'Settings', name : 'setting'},
      {dName : 'My Pofile', name : 'profile'}
    ];
  }

  getNavigationElements(role: string): any{
    if (role && role.toLowerCase() === 'admin'){
      const navig = {dName : 'Admin Panel', name : 'adminPanel'};
      return [...this.navigationOptions, navig];
    }
    else if (role && role.toLowerCase() === 'user') {
      return this.navigationOptions;
    }
    return [];
  }

  getNavigationItem(name: string, role: string): string {
    let navItem = 'No Item Available';
    let navList = this.navigationOptions;
    if (role && this.navigationOptions.length === 3 && role.toLowerCase() === 'admin'){
      navList = [...navList, {dName : 'Admin Panel', name : 'adminPanel'}];
    }
    for (const nav of navList){
      if (name && (nav.name.toLowerCase() === name.toLowerCase())){
        navItem = nav.dName;
      }
    }
    return navItem;
  }
}
