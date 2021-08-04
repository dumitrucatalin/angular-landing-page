import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ProjectCardModel from '../../models/project-card-model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
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
export class ProjectCardComponent implements OnInit {
  state = 'normal';
  wildState = 'normal';
  @Input() projectModel!: ProjectCardModel;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    // console.log(this.projectModel);
  }

  gotoProjectGitUrl() {
    window.open(this.projectModel.projectGitURL);
    // this.router.navigateByUrl(this.projectModel.projectGitURL);
  }
}
