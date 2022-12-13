import { writeEffect } from "./writeEffect.js";

const $ = (selector) => document.querySelector(selector);

const data = $("#send");
const name = $("#name");
const email = $("#email");
const message = $("#message");
const loader = $("#loader");
const footer = $("footer");

const options = { method: "GET" };
const bot = {
  token: "5336214274:AAGPuYNMDxRkydUP94ru7tjdgTBJjXjABgg",
  chat_id: "875509628",
};
const sendMessage = (msg) => {
  let url = `https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chat_id}&parse_mode=markdown&text=${msg}`;
  return fetch(url, options)
    .then((res) => {
      loader.children[0].remove();
      loader.style.background = 'radial-gradient(#1114 10%,#000), url("../static/success.png") center no-repeat';
      setTimeout(() => {
        footer.style.visibility = "initial";
        footer.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 });
        footer.innerHTML = `<h1><span id='end'></span></h1>`;
        writeEffect(
          footer.children[0].children[0],
          [`Thanks ${name.value} for watch and contact me`],
          7,
          false
        );
      }, 2000);
      setTimeout(() => {
        window.location.href = "https://www.braiidev.com";
      }, 10000);
    })
    .catch((err) => console.log(err));
};
const sender = data.addEventListener("submit", (event) => {
  event.preventDefault();
  loader.style.visibility = "initial";
  const n = name.value.replace(" ", "%20");
  const e = email.value.replace(" ", "%20");
  const m = message.value.replace(" ", "%20");
  const msg = `***Name:***%20${n}||***Email:***%20${e}||***Message:***%20${m}|`;
  const s = sendMessage(msg);
});

export { sender };
