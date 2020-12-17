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
button.addEventListener("click", function (event) {
  console.log("BUTTON");
  console.log(event);
  console.log(this);
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

//add event listener to all li elements
//not best way in term of memory and perfrmance
const listItems = document.querySelectorAll("li");
// listItems.forEach((listItem) => {
//   listItem.addEventListener("click", (event) => {
//     console.log(event.classList);
//     event.target.classList.toggle("highlight");
//   });
// });

//access all li by only one eventListener using event delegation
const list = document.querySelector("ul");
//this approc is corrent if the li element does not have child element
// list.addEventListener("click", (event) => {
//   event.target.classList.toggle("highlight");
// });
//if the li element has child elements the best way to target the li element is by traversal method
list.addEventListener("click", (event) => {
  event.target.closest("li").classList.toggle("highlight");
  //to execute a method on a different DOM element
  //form.submit();
  button.click();
});
