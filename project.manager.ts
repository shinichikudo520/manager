import Manager from "./manager";
import Project from "./project";

export default class ProjectManager extends Manager<Project> {
  static tool: ProjectManager | null = null;
  static getInstance() {
    if ((ProjectManager.tool = null)) {
      ProjectManager.tool = new ProjectManager();
    }
    return ProjectManager.tool;
  }
  constructor() {
    super();
  }
}
