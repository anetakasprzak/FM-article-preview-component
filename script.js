"use strict";

const shareDark = document.querySelector(".share--dark");
const shareWhite = document.querySelector(".share--white");
const btnOpenShare = document.getElementById("btn__share-1");
const btnOpenShare2 = document.getElementById("btn__share-2");
const absoluteBox = document.getElementById("absolute-box");

btnOpenShare.addEventListener("click", function () {
  const mobile = window.matchMedia("(max-width: 1139px)");
  const desktop = window.matchMedia("(min-width: 1140px)");

  if (mobile.matches) {
    shareWhite.classList.toggle("hidden");
    shareDark.classList.toggle("hidden");
  }

  if (desktop.matches) {
    absoluteBox.classList.toggle("hidden");
    // shareDark.classList.toggle("hidden");
  }
});

btnOpenShare2.addEventListener("click", function () {
  shareWhite.classList.toggle("hidden");
  shareDark.classList.toggle("hidden");
});
