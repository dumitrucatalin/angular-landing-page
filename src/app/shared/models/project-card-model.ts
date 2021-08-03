export default class ProjectCardModel {
  technologyImgUrl: string;
  technologyName: string;
  projectName: string;
  projectDescryption: string;
  constructor(
    technologyImgUrl: string,
    technologyName: string,
    projectName: string,
    projectDescryption: string
  ) {
    this.technologyImgUrl = technologyImgUrl;
    this.projectDescryption = projectDescryption;
    this.technologyName = technologyName;
    this.projectName = projectName;
  }
}
