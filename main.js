let mainNumber = document.querySelector(".secretnumber");
// secretNumber.textContent = 2;

// console.log(secretNumber);
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");

let number = Number(input.value);
let secretNumber = Math.trunc(Math.random() * 20 + 1);

console.log(secretNumber);
// function check() {
//   if (secretNumber.textContent > input.value) {
//     secretNumber.textContent = "?";
//     result.textContent = "High number";
//   } else if (secretNumber.textContent == input.value) {
//     result.textContent = "Correct number";
//   }
// }

btn.addEventListener("click", () => {
  let number = Number(input.value);
  if (!number) {
    result.textContent = "⛔️ No number!";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else if (secretNumber === number) {
    result.textContent = "🎉 Correct Number!";
    document.body.style.backgroundColor = "green";
    mainNumber.textContent = secretNumber;
  } else if (secretNumber !== number) {
    result.textContent =
      secretNumber < number ? "📈 Katta son!" : "📉 Kichik Son!";
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
    mainNumber.textContent = "?";
  }
});
