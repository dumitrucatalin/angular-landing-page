import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  routeToMain(){
    this.router.navigate(['']);
  }

  routeToProjects(){
    this.router.navigate(['projects']);
  }

  routeToContact(){
    this.router.navigate(['contact']);
  }

}
