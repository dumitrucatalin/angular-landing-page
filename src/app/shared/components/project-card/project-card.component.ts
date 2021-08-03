import { Component, Input, OnInit } from '@angular/core';
import ProjectCardModel from '../../models/project-card-model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() projectModel!: ProjectCardModel;

  constructor() { }

  ngOnInit(): void {
    console.log(this.projectModel);
  }

}
