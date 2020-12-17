import { DOMHelper } from "../Utility/DOMHelper.js";
import { Tooltip } from "./Tooltip.js";

//to convert the element lists in to an object
export class ProjectItem {
  //hasActiveTooltip = false;

  //to be able to use the method switchProject from the ProjectList class I need to pass it as parameter
  constructor(id, updateProjectListFunction, type) {
    this.id = id;
    this.hasActiveTooltip = false;
    this.updateProjectListHandler = updateProjectListFunction;
    this.connectSwitchButton(type);
    this.connectMoreInfoButton();
    this.connectSwitchButton();
    this.connectDrag();
  }

  showMoreInfoHandler() {
    if (this.hasActiveTooltip) {
      return;
    }
    const projectElement = document.getElementById(this.id);
    const tooltipText = projectElement.dataset.extraInfo;
    const tooltip = new Tooltip(
      () => {
        this.hasActiveTooltip = false;
      },
      tooltipText,
      this.id
    );
    tooltip.attach();
    this.hasActiveTooltip = true;
  }

  connectDrag() {
    document.getElementById(this.id).addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", this.id);
      event.dataTransfer.effectAllowed = "move";
    });
  }

  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    const moreInfoBtn = projectItemElement.querySelector(
      "button:first-of-type"
    );
    moreInfoBtn.addEventListener("click", this.showMoreInfoHandler.bind(this));
  }

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
    this.updateProjectListHandler = updateProjectListsFn;
    this.connectSwitchButton(type);
  }
}
