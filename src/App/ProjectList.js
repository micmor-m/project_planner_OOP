import { ProjectItem } from "./ProjectItem.js";
import { DOMHelper } from "../Utility/DOMHelper.js";

export class ProjectList {
  //projects = [];
  constructor(type) {
    this.type = type;
    this.projects = [];
    //parse all elements in the type of list I need
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(
        new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)
      );
    }
    this.connectDroppable();
  }

  connectDroppable() {
    const list = document.querySelector(`#${this.type}-projects ul`);

    list.addEventListener("dragenter", (event) => {
      if (event.dataTransfer.types[0] === "text/plain") {
        event.preventDefault();
        list.parentElement.classList.add("droppable");
      }
    });

    list.addEventListener("dragover", (event) => {
      if (event.dataTransfer.types[0] === "text/plain") {
        event.preventDefault();
      }
    });

    list.addEventListener("dragleave", (event) => {
      //to remove the highlight only when the element leave completly its parent
      if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {
        list.parentElement.classList.remove("droppable");
      }
    });

    list.addEventListener("drop", (event) => {
      const prjId = event.dataTransfer.getData("text/plain");
      if (this.projects.find((p) => p.id === prjId)) {
        return;
      }
      //at this point I will have to manage the other instance not the project instance I am currently in
      //but this is little complicated and because we already handle this issue,
      //here simply I call the event of click button to switch the drag proget to an instance to another
      document
        .getElementById(prjId)
        .querySelector("button:last-of-type")
        .click();
      list.parentElement.classList.remove("droppable");
      //event.preventDefault(); //not mandatory
    });
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
