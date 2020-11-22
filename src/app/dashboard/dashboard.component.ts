import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit, DoCheck {
  username = '';
  navigationItems = [];
  selectedNavItem = 'Incorrect Item Clicked';
  clickedNav = '';
  isNavChanged = false;
  role = '';
  constructor(private router: Router,
              private authServices: AuthenticationService,
              private navItems: NavigationService) { }

  ngOnInit(): void {
    this.role = this.authServices.getUserData();
    this.username = this.authServices.getUserName(this.role);
    this.navigationItems = this.navItems.getNavigationElements(this.role);
    if (this.navigationItems.length){
      this.selectedNavItem = this.navigationItems[0].dName;
    }
  }

  logout(): void {
    this.authServices.removeUserData();
    this.router.navigate(['/login']);
  }

  onNavClick(clickedItem: string): void {
    this.isNavChanged = true;
    this.clickedNav = this.navItems.getNavigationItem(clickedItem, this.role);
  }

  ngDoCheck(): void {
    if (this.selectedNavItem !== this.clickedNav && this.isNavChanged){
      this.isNavChanged = false;
      this.selectedNavItem = this.clickedNav;
    }
  }
}
