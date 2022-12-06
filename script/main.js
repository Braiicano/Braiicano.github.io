import { writeEffect } from "./writeEffect.js";

const $ = (selector) => document.querySelector(selector);
const typed = $("#typed");
let words = ["Developer", "Web design", "Backend", "Python", "Javascript"];

writeEffect(typed, words, 8);
