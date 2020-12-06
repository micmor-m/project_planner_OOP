const button = document.querySelector("button");

const buttonClickHandler = (event) => {
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log("This was clicked!");
};

button.addEventListener("click", buttonClickHandler);

setTimeout(() => {
  button.removeEventListener("click", buttonClickHandler);
}, 2000);
