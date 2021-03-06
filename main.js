// USE STRICT

const pets = [
 {
    image: "https://www.purinaproclub.com/sites/g/files/auxxlc346/files/styles/facebook_share/public/Resources_Dog%20Articles_Health_Line%20126_Thumb.jpg?itok=18TUaZP2",
    name: "Mocha",
    color: "Grey",
    specialSkill: "Fetch",
    typeOfPet: "dog",
  },
  {
    image: "https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2016/09/01160419/black-cat-1-940x503.jpg",
    name: "Kitters",
    color: "Black",
    specialSkill: "Sleeping",
    typeOfPet: "cat",
  },
  {
    image: "https://i.pinimg.com/originals/1d/26/14/1d26144b04873f9a13ee05c0ae8d583f.jpg",
    name: "Chomper",
    color: "Grey",
    specialSkill: "Chomping",
    typeOfPet: "dino",
  },
  {
    image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/s960x960/93366679_10221584510259882_1653151457899184128_o.jpg?_nc_cat=102&amp;_nc_sid=110474&amp;_nc_ohc=Uvlk5CYAhrwAX-3RMpY&amp;_nc_ht=scontent-atl3-1.xx&amp;_nc_tp=7&amp;oh=2a5eabade88f74514544ac279ca9f77c&amp;oe=5F3F984C",
    name: "Souffle",
    color: "Brown",
    specialSkill: "spin",
    typeOfPet: "dog",
  },
  {
    image: "https://images.creativemarket.com/0.1.0/ps/2438977/300/200/m2/fpc/wm0/kgdhbglux2txdxhfk4pgijvt454ybpmzocyw6evyd4zhw5ijjjpguadsz34cgjfh-.jpg?1490100724&s=6f95e764e2a1d7bb2e37b089edc594b8",
    name: "BK",
    color: "Orange",
    specialSkill: "Boxing",
    typeOfPet: "cat",
  },
  {
    image: "https://vignette.wikia.nocookie.net/landbeforetime/images/0/0b/Littlefoot_IV.png/revision/latest?cb=20171227183122",
    name: "Littlefoot",
    color: "purple",
    specialSkill: "javascript",
    typeOfPet: "dino",
  }
];

const printToDom = (divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML = textToPrint;
}



const buildPetCards = () => {
    let domString = '';

    for (let j = 0; j < pets.length; j++) {
      domString += `<div class="pet pet-${pets[j].typeOfPet}">`;
      domString +=   `<div class="pet-name"><h2>${pets[j].name}</h2></div>`;
      domString +=   `<div class="pet-image"><img src=${pets[j].image} alt="Image of a ${pets[j].typeOfPet}"></div>`
      domString +=   `<div class="pet-color"><h3></h3>${pets[j].color}</h3></div>`
      domString +=   `<div class="pet-skills"><p> This pet's special skill is ${pets[j].specialSkill}</p></div>`
      domString +=   `<div class="pet-type"><h3>${pets[j].typeOfPet}</h3></div>`
      domString += `</div>`
    }
    printToDom('pets', domString);
}

const init1 = () => {

    buildPetCards();
}

init1();

const dogButton = document.getElementById("dog-btn");
const catButton = document.getElementById("cat-btn");
const dinoButton = document.getElementById("dino-btn");
const allButton = document.getElementById("all-btn");

const getCats = document.getElementsByClassName("pet-cat");
const getDogs = document.getElementsByClassName("pet-dog");
const getDinos = document.getElementsByClassName("pet-dino");

dogButton.addEventListener("click", function (event) {
  for (let l = 0; l < getCats.length; l++) {
    getCats[l].style.display = "none";
  }
  for (let k = 0; k < getDinos.length; k++) {
    getDinos[k].style.display = "none";
  }
  for (let f = 0; f < getDogs.length; f++) {
    getDogs[f].style.display = "block";
  }
});

catButton.addEventListener("click", function (event) {
  for (let l = 0; l < getDogs.length; l++) {
    getDogs[l].style.display = "none";
  }
  for (let k = 0; k < getDinos.length; k++) {
    getDinos[k].style.display = "none";
  }
  for (let f = 0; f < getCats.length; f++) {
    getCats[f].style.display = "block";
  }
});

dinoButton.addEventListener("click", function (event) {
  for (let l = 0; l < getCats.length; l++) {
    getCats[l].style.display = "none";
  }
  for (let k = 0; k < getDogs.length; k++) {
    getDogs[k].style.display = "none";
  }
  for (let f = 0; f < getDinos.length; f++) {
    getDinos[f].style.display = "block";
  }
});

allButton.addEventListener("click", function (event) {
  for (let l = 0; l < getCats.length; l++) {
    getCats[l].style.display = "block";
  }
  for (let f = 0; f < getDinos.length; f++) {
    getDinos[f].style.display = "block";
  }
  for (let k = 0; k < getDogs.length; k++) {
    getDogs[k].style.display = "block";
  }
});