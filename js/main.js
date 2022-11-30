"use strict";

const BASE_URL = "https://fathomless-shelf-54969.herokuapp.com";

const sunPlanet = document.querySelector(".sun");
const merkuriusPlanet = document.querySelector(".merkurius");
const venusPlanet = document.querySelector(".venus");
const jordenPlanet = document.querySelector(".jorden");
const marsPlanet = document.querySelector(".mars");
const jupiterPlanet = document.querySelector(".jupiter");
const saturnusPlanet = document.querySelector(".saturnus");
const uranusPlanet = document.querySelector(".uranus");
const neptunusPlanet = document.querySelector(".neptunus");
const pageOne = document.querySelector(".pageOne");
const planetBox = document.querySelector(".container__planetbox");
const pageTwo = document.querySelector(".planet__container");
const button = document.querySelector("button");

async function getKey() {
  const response = await fetch(`${BASE_URL}/keys`, { method: "POST" });
  const data = await response.json();
  // console.log(data);

  return data.key;
}

async function getPlanets() {
  const key = await getKey();
  const response = await fetch(`${BASE_URL}/bodies`, {
    headers: {
      "x-zocom": key,
    },
  });
  const data = await response.json();
  return data;
}

function getPlanetInfo(planetId) {
  console.log("Planetens ID:  ", planetId);
  getPlanets().then((data) => {
    console.log(data);
    data.forEach((planet, index) => {
      planetId === index;
      console.log("Planet och index: ", planet, index);
    });
  });
}
getPlanetInfo();

// Click event for planets
sunPlanet.addEventListener("click", () => {
  pageOne.style.display = "none";
  planetBox.style.display = "none";
  pageTwo.style.display = "block";
});

merkuriusPlanet.addEventListener("click", () => {
  sunPlanet.style.backgroundColor = "#888888";
  pageOne.style.display = "none";
  planetBox.style.display = "none";
  pageTwo.style.display = "block";
});

venusPlanet.addEventListener("click", () => {
  sunPlanet.style.backgroundColor = "#e7cdcd";
  pageOne.style.display = "none";
  planetBox.style.display = "none";
  pageTwo.style.display = "block";
});

jordenPlanet.addEventListener("click", (event) => {
  getPlanetInfo(event.target.id);

  sunPlanet.style.backgroundColor = "#428ed4";
  pageOne.style.display = "none";
  planetBox.style.display = "none";
  pageTwo.style.display = "block";
});

marsPlanet.addEventListener("click", (event) => {
  getPlanetInfo(event.target.id);
  console.log(event);

  sunPlanet.style.backgroundColor = "#ef5f5f";
  pageOne.style.display = "none";
  planetBox.style.display = "none";
  pageTwo.style.display = "block";
});

jupiterPlanet.addEventListener("click", () => {
  sunPlanet.style.backgroundColor = "#e29468";
  pageOne.style.display = "none";
  planetBox.style.display = "none";
  pageTwo.style.display = "block";
});

saturnusPlanet.addEventListener("click", () => {
  sunPlanet.style.backgroundColor = "#c7aa72";
  pageOne.style.display = "none";
  planetBox.style.display = "none";
  pageTwo.style.display = "block";
});

uranusPlanet.addEventListener("click", () => {
  sunPlanet.style.backgroundColor = "#c9d4f1";
  pageOne.style.display = "none";
  planetBox.style.display = "none";
  pageTwo.style.display = "block";
});

neptunusPlanet.addEventListener("click", () => {
  sunPlanet.style.backgroundColor = "#7a91a7";
  pageOne.style.display = "none";
  planetBox.style.display = "none";
  pageTwo.style.display = "block";
});

// Click event for return button
button.addEventListener("click", () => {
  return location.reload();
});

// Fetching data for planets
