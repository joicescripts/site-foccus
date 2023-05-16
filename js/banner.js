let bg = document.getElementById("bg");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("textaa");
let minhaLua = document.getElementById("minhaLua");
let modelLua = document.getElementById("modelLua");


window.addEventListener('scroll', function () {
  var value = window.scrollY;
  console.log("---> " + value)

  bg.style.top = value * 0.5 + 'px';
  minhaLua.style.left = -value * 0.5 + 'px';
  minhaLua.style.top = value * 0.5 + 'px';
  modelLua.style.width = value * 0.2 + 50 + 'px';
  mountain.style.top = -value * 0.15 + 'px';
  road.style.top = value * 0.15 + 'px';
  text.style.top = value * 1 + 'px';
})