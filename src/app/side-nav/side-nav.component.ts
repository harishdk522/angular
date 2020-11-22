import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  @Output() navClicked = new EventEmitter<string>();
  @Input('navItems') navigations: []; // tslint:disable-line: no-input-rename

  handleClickedNav(link: string, ev: any): any {
    ev.preventDefault();
    this.navClicked.emit(link);
  }
}
