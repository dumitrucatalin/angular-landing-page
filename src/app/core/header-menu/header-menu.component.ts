import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {


  constructor(
    private router: Router,
    private zone: NgZone
  ) { }

  ngOnInit(): void {
  }

  routeToMain() {
    this.zone.run(() => {
      this.router.navigate(['']);
    });
  }

  routeToProjects() {
    this.zone.run(() => {
      this.router.navigate(['projects']);
    });
  }

  routeToContact() {
    this.zone.run(() => {
      this.router.navigate(['contact']);
    });
  }

}
