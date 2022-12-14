const $ = (selector) => document.querySelectorAll(selector);
const titles = $(".proyects__content__item");
const colors = ["#ff0000", "#f5f000", "#00ff00", "#00f5f0", "#0000ff"];

const changeColor = (items = titles, color = colors) => {
  items.forEach((e, i) => {
    i = i > color.length - 1 ? i % color.length : i;
    e.children[0].style.color = color[i];
  });
};
export { changeColor };
