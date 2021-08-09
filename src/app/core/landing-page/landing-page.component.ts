import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { WindowScrollService } from '../services/window-scroll.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  scrollY$: Observable<number>;

  pageYoffset = 0;
  maxYoffset = 0;

  isScrollUsed: boolean = false;

  @HostListener('window:scroll', ['$event']) onScroll(e: Event): void {
    // console.log(e);
    this.isScrollUsed = true;
    this.windowScrollService.scrollY.next(this.getYPosition(e));

    this.pageYoffset = window.pageYOffset;
    this.maxYoffset = this.getMaxScrollY();
    console.log(this.pageYoffset, this.maxYoffset);
    // console.log(this.getScrollHeight());
  }

  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    public media: MediaMatcher,
    private windowScrollService: WindowScrollService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.scrollY$ = this.windowScrollService.scrollY$;
  }

  ngOnInit(): void {}

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }

  getScrollHeight(): number {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  }

  getMaxScrollY(): number {
    return (
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    );
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
