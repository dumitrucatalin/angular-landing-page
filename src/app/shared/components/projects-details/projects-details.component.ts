import { animate, state, style, transition, trigger } from '@angular/animations';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss'],
  animations: [
    trigger('rightToLeft', [
      state('normal', style({
        // 'background-color': 'red',
        transform: 'translateX(+500px)'
      })),
      state('highlighted', style({
        // 'background-color': 'blue',
        transform: 'translateX(0)'
      })),
      transition('normal <=> highlighted', animate(800)),
      // transition('highlighted => normal', animate(800))
    ]),
    trigger('leftToRight', [
      state('normal', style({
        // 'background-color': 'red',
        transform: 'translateX(-500px)'
      })),
      state('highlighted', style({
        // 'background-color': 'blue',
        transform: 'translateX(0)'
      })),
      transition('normal <=> highlighted', animate(800)),
      // transition('highlighted => normal', animate(800))
    ]),
    trigger('downToUp', [
      state('normal', style({
        // 'background-color': 'red',
        transform: 'translateY(+500px)'
      })),
      state('highlighted', style({
        // 'background-color': 'blue',
        transform: 'translateY(0)'
      })),
      transition('normal <=> highlighted', animate(800)),
      // transition('highlighted => normal', animate(800))
    ]),
    trigger('scale', [
      state('normal', style({
        // 'background-color': 'red',
        transform: 'translateX(0) scale(0)'
      })),
      state('highlighted', style({
        // 'background-color': 'blue',
        transform: 'translateY(0)  scale(1)'
      })),
      transition('normal <=> highlighted', animate(800)),
      // transition('highlighted => normal', animate(800))
    ]),

  ]
})
export class ProjectsDetailsComponent implements OnInit {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  state = 'normal';
  wildState = 'normal';

  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    public media: MediaMatcher,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {

    setTimeout(() => {
      this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
      this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
    }, 500);

  }



  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
