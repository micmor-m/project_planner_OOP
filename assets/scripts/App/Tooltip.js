import { Component } from "./Component.js";

class Tooltip extends Component {
  constructor(closeNotifierFunction, text, hostElement) {
    super(hostElement);
    this.closeNotifier = closeNotifierFunction;
    this.text = text;
    this.create();
  }
  //to close the tooltip
  //use arrow function here as alternative to use the .bind method
  //to pass the right this element
  closeTooltip = () => {
    this.detach();
    this.closeNotifier();
  };

  create() {
    const tooltipElement = document.createElement("div");
    tooltipElement.className = "card";
    const tooltipTemplate = document.getElementById("tooltip");
    const tooltipBody = document.importNode(tooltipTemplate.content, true);
    tooltipBody.querySelector("p").textContent = this.text;
    tooltipElement.append(tooltipBody);

    // tooltipElement.textContent = this.text;
    //console.log(this.hostElement.getBoundingClientRect());
    //To position exactly the tooltip I need the hostElement top-left corner
    const hostElPosLeft = this.hostElement.offsetLeft;
    const hostElPosTop = this.hostElement.offsetTop;
    //and its height
    const hostElHeight = this.hostElement.offsetHeight;
    //to get the scrollTop move to the parent element which is the one with the scrolling bar
    const parentElementScrolling = this.hostElement.parentElement.scrollTop;

    //with this position I can position the tooltip
    const x = hostElPosLeft + 20;
    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;

    tooltipElement.style.position = "absolute";
    tooltipElement.style.left = x + "px";
    tooltipElement.style.top = y + "px";

    tooltipElement.addEventListener("click", this.closeTooltip);
    this.element = tooltipElement;
  }
}
