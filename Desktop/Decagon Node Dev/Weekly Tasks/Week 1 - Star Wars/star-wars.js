const main = (document.getElementById(
  "char-info"
).innerHTML = `<div class="container-fluid d-flex justify-content-between">
<h1><p>STAR WARS</p></h1>
</div>`);

let container = document.createElement("div");
container.className = "row mx-4";
document.body.append(container);

const starWarsData = () => {
  fetch(`https://swapi.dev/api/people`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      arr = data.results;
      let imagesDiv = document.createElement("div");
      container.appendChild(imagesDiv);
      imagesDiv.className = "col-lg-8 row justify-content-center";
      let modalDiv = document.createElement("div");
      document.body.append(modalDiv);
      modalDiv.className = "popup center";
      modalDiv.innerHTML = `
        <div class="icon">
          <i class="fa fa-check"></i>
        </div>
   
        <div class="description">
         <p class="charname">Name</p>
         <p class="chargender">Gender</p>
         <p class="charheight">Height</p>
        </div>
        <div class="dismiss-btn">
          <button class="dismiss-popup-btn" id="dismiss-popup-btn">
              Dismiss
          </button>
        </div>`;

      const charname = document.querySelector(".charname");
      const charsex = document.querySelector(".chargender");
      const charheight = document.querySelector(".charheight");

      arr.forEach((element, i) => {
        // Creating HTML Elements with JavaScript
        const { name, gender, height } = element;

        let buttonEl = document.createElement("button");

        buttonEl.className = "btn btn-dark open-popup-btn";

        buttonEl.textContent = name;

        let characterImage = document.createElement("img");

        let imageContainer = document.createElement("div");

        imageContainer.className = "images col-md-6 col-lg-4 col-xl-3";

        characterImage.className = "img-fluid";

        characterImage.setAttribute(
          "src",
          `images/IMAGES2/Image${[i + 1]}.jpg`
        );
        imageContainer.append(characterImage);

        imageContainer.append(buttonEl);

        imagesDiv.append(imageContainer);

        // Adding Modal functionality
        const displayInfoEl = document.querySelectorAll(".open-popup-btn");
        const dismissEl = document.querySelectorAll(".dismiss-popup-btn");

        displayInfoEl[i].addEventListener("click", () => {
          document.getElementsByClassName("popup")[0].classList.add("active");
          charname.textContent = `Name: ${name}`;
          
          charsex.textContent = `Gender: ${gender}` || "robot";
          charheight.textContent = `Height: ${height}cm`;
        });
        for (let j = 0; j < dismissEl.length; j++) {
          dismissEl[j].addEventListener("click", () => {
            document
              .getElementsByClassName("popup")[0]
              .classList.remove("active");
          });
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

starWarsData();
