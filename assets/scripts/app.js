class DOMHelper {
  //to remove the eventListener to the button before add a new one
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }

  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    console.log(element);
    console.log(destinationElement);
    destinationElement.append(element);
  }
}

class Tooltip {}

//to convert the element lists in to an object
class ProjectItem {
  //to be able to use the method switchProject from the ProjectList class I need to pass it as parameter
  constructor(id, updateProjectListFunction, type) {
    this.id = id;
    this.updateProjectListHandler = updateProjectListFunction;
    this.connectSwitchButton();
    this.connectMoreInfoButton(type);
  }

  connectMoreInfoButton() {}

  connectSwitchButton(type) {
    //since I have available the id of the item I can get all li element by id
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector("button:last-of-type");
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
    switchBtn.textContent = type === "active" ? "Finish" : "Activate";
    //when pressing switchBtn I want to remove the il from one list and add it to the other
    switchBtn.addEventListener(
      "click",
      this.updateProjectListHandler.bind(null, this.id)
    );
  }

  update(updateProjectListsFn, type) {
    this.updateProjectListsHandler = updateProjectListsFn;
    this.connectSwitchButton(type);
  }
}

class ProjectList {
  projects = [];
  constructor(type) {
    this.type = type;
    //parse all elements in the type of list I need
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(
        new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)
      );
    }
    console.log(this.projects);
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project) {
    //1 add the project received as argumet to the array
    this.projects.push(project);
    //2 add the new project to the DOM
    //could be add here below but for practice purpose create a new class
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    //after the switch I need to update the button with the new section Id and caption
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    //1 add the project to the other instance of ProjectList
    this.switchHandler(this.projects.find((elem) => elem.id === projectId));
    //2 remove the element from the projects array
    // const projectIndex = this.projects.indexOf(elem => {elem.id === projectId})
    // this.projects.splice(projectIndex, 1)
    this.projects = this.projects.filter((elem) => elem.id !== projectId);
  }
}

//create an App object to use to start the program
class App {
  static init() {
    const activeProjectList = new ProjectList("active");
    const finishedProjectList = new ProjectList("finished");
    //here I want to call the addProject function but of the other instance
    //for this reason I need to bind to the function the right parameter
    activeProjectList.setSwitchHandlerFunction(
      finishedProjectList.addProject.bind(finishedProjectList)
    );

    finishedProjectList.setSwitchHandlerFunction(
      activeProjectList.addProject.bind(activeProjectList)
    );
  }
}

//call App to start code execution
App.init();
