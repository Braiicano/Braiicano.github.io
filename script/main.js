import { writeEffect } from "./writeEffect.js";
import { sender } from "./sendMessage.js";

const $ = (selector) => document.querySelector(selector);
const typed = $("#typed");
let words = ["Developer", "Web designer", "Backend", "Python", "Javascript"];
const _name = $("#nameWrite");
let __name = ["Braian Cano"];

writeEffect(_name, __name, 15, false);
writeEffect(typed, words, 8);

sender;