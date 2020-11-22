import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() loggedOut = new EventEmitter<boolean>();
  @Input('uname') username: string; // tslint:disable-line: no-input-rename

  constructor() { }

  ngOnInit(): void {
  }

  handleLogout(ev: any): any {
    ev.preventDefault();
    this.loggedOut.emit(true);
  }
}
