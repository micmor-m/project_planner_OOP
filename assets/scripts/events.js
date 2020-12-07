const button = document.querySelector("button");

const buttonClickHandler = (event) => {
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log("This was clicked!");
};

//button.addEventListener("click", buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);

//example of capturing and bubbling face
button.addEventListener("click", (event) => {
  console.log("BUTTON");
  console.log(event);
});

const div = document.querySelector("div");
div.addEventListener(
  "click",
  (event) => {
    console.log("DIV");
    console.log(event);
  }
  // true
);

//infinite scrolling example
//zom-in the browser to let the vertical scroll appear
let curElementNumber = 0;

function scrollHandler() {
  const distanceToBottom = document.body.getBoundingClientRect().bottom;

  if (distanceToBottom < document.documentElement.clientHeight + 150) {
    const newDataElement = document.createElement("div");
    curElementNumber++;
    newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
    document.body.append(newDataElement);
  }
}

window.addEventListener("scroll", scrollHandler);

//to prevent default action of submit form
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});
