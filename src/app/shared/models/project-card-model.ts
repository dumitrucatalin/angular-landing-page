export default class ProjectCardModel {
  technologyImgUrl: string;
  technologyName: string;
  projectName: string;
  projectDescryption: string;
  projectGitURL: string;
  constructor(
    technologyImgUrl: string,
    technologyName: string,
    projectName: string,
    projectDescryption: string,
    projectGitURL: string
  ) {
    this.technologyImgUrl = technologyImgUrl;
    this.projectDescryption = projectDescryption;
    this.technologyName = technologyName;
    this.projectName = projectName;
    this.projectGitURL = projectGitURL;
  }
}
