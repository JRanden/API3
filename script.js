let input = document.getElementById("searchField");
let inputButton = document.getElementById("searchButton");

inputButton.addEventListener("click", value);

input.onkeydown = function (e) {
  if (e.key === "Enter") {
    value();
  }
};

function value() {
  let valueInput = document.getElementById("searchField").value;
  let myValue = valueInput.toLowerCase();
  console.log(myValue);
  apiSearch(myValue);
}

fetch("https://hp-api.onrender.com/api/characters")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

function apiSearch(inputValue) {
  fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((data) => {
        if (inputValue == data.name.toLowerCase()) {
          document.querySelector("#imgDisplay").innerHTML = " ";

          let nameDisplay = document.getElementById("nameDisplay");
          let actorDisplay = document.getElementById("actorDisplay");
          let houseDisplay = document.getElementById("houseDisplay");
          let wandDisplay = document.getElementById("wandDisplay");
          let speciesDisplay = document.getElementById("speciesDisplay");
          let patrnousDisplay = document.getElementById("patrnousDisplay");
          let birthDisplay = document.getElementById("birthDisplay");

          console.log(data);

          nameDisplay.textContent = data.name;
          actorDisplay.textContent = `Played by: ${data.actor}`;
          houseDisplay.textContent = `House of ${data.house}`;
          wandDisplay.textContent = `Wand Core: ${data.wand.core} length: ${data.wand.length} wood: ${data.wand.wood}`;
          speciesDisplay.textContent = `Species: ${data.species}`;
          patrnousDisplay.textContent = `Patronous: ${data.patronus}`;
          birthDisplay.textContent = `Date of Birth ${data.dateOfBirth}`;

          // Image Creation
          var img = document.createElement("img");
          var src = document.getElementById("imgDisplay");
          img.src = data.image;
          src.appendChild(img);
        }
      });
    });
}
