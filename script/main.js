import { writeEffect } from "./writeEffect.js";

const $ = (selector) => document.querySelector(selector);
const typed = $("#typed");
let words = ["Developer", "Web designer", "Backend", "Python", "Javascript"];
const name = $("#name");
let _name = ["Braian Cano"];

writeEffect(typed, words, 8);
writeEffect(name, _name, 15, false);