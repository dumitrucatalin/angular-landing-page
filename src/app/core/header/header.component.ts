import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  public logoName: string = "< Awesome page />"

  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    public media: MediaMatcher,
    private router: Router,
    private zone: NgZone
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

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

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
