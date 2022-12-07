import { writeEffect } from "./writeEffect.js";

const $ = (selector) => document.querySelector(selector);
const typed = $("#typed");
let words = ["Developer", "Web designer", "Backend", "Python", "Javascript"];
const name = $("#name");
let _name = ["Braian Cano"];

writeEffect(typed, words, 8);
writeEffect(name, _name, 15, false);

const continueHover = $("#continue");
continueHover.addEventListener("mouseover", (e) => {
  let time = 1000;
  let words = e.target.childNodes;
  words.forEach((word) =>
    word.animate([{ color: "red" }, { color: "blue" }], {
      duration: (time += 1000),
      iterations: Infinity,
    })
  );
});
