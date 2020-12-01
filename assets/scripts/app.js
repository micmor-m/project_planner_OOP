class Tooltip {}

//to convert the element lists in to an object
class ProjectItem {
  constructor(id) {
    this.id = id;
  }
}

class ProjectList {
  projects = [];
  constructor(type) {
    //parse all elemnt in the type of list I need
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(new ProjectItem(prjItem.id));
    }
    console.log(this.projects);
  }
}

//create an App object to use to start the program
class App {
  static init() {
    const activeProjectList = new ProjectList("active");
    const finishedProjectList = new ProjectList("fineshed");
  }
}

//call App to start code execution
App.init();
