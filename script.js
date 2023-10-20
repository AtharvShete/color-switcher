const body = document.querySelector('body');

const buttons = document.querySelectorAll(".button");
// body.style.backgroundColor = "black"
console.log(buttons)


buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click',(e) => {
    console.log(e);
    console.log(e.target);
    body.style.backgroundColor = e.target.id; 
  });
});

