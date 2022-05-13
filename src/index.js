import "./style.css";
import {
  countElements,
  displayComments,
  addComment,
} from "./modules/funcComment.js";
import { getNasaApi, getDataDateImage, likeLink } from "./modules/API-links.js";
import { getScores, postScores } from "./modules/get-post-data.js";
import {
  closePopup,
  displayPopup,
  containerDynamicCards,
} from "./modules/pop-up.js";

function addCard(img, title, index) {
  const div = document.createElement("div");
  div.classList.add("cardContainer");
  div.innerHTML = `
        <div class="imgCardcontainer">
          <img src="${img}" alt="Image provided by Nasa's Api">
        </div>
        <div class="title">
          <h3>${title}</h3>
          <a href="#" id="${index}star" class="like"><i class="fas fa-heart"></i></a>
        </div>
        <small class='small-class'></small>
        <input type="button" value="Comments" id="${index}" class="comment">
        `;
  containerDynamicCards.appendChild(div);
}

// HERE DISPLAYS THE DATA DESCRIPTION
function displayImage(id) {
  getScores(getDataDateImage(id))
    .then((data) => displayPopup(data.hdurl, data.title, data.explanation, id))
    .then(() => {
      displayComments(id);
      const closeBtn = document.getElementById("close");
      closeBtn.addEventListener("click", () => {
        closePopup(closeBtn);
      });
    })
    .catch((error) => console.log(error));
}

const deployLikes = (id, likes) => {
  const small = document.getElementById(id);
  small.parentElement.nextElementSibling.innerHTML = `${likes} likes`;
};

function displayStars() {
  getScores(likeLink)
    .then((data) =>
      data.forEach((elem, i) => {
        if (i < countElements(containerDynamicCards)) {
          deployLikes(elem.item_id, elem.likes);
        }
      })
    )
    .catch((error) => console.log(error));
}

function displayScores() {
  getScores(getNasaApi)
    .then((data) =>
      data.forEach((elem, index) => addCard(elem.hdurl, elem.title, index))
    )
    .then(() => {
      displayStars();
      countItems();
    })
    .catch((error) => console.log(error));
}

function likeIt(id, stars) {
  const data = { item_id: id };
  postScores(likeLink, data)
    .then((data) => {
      if (data.status === 201) {
        deployLikes(id, stars);
      }
    })
    .catch((error) => console.log(error));
}

displayScores();

containerDynamicCards.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-heart")) {
    e.preventDefault();
    const sC = parseInt(
      e.target.parentElement.parentElement.nextElementSibling.textContent,
      10
    );
    const stars = sC + 1;
    likeIt(e.target.parentElement.id, stars);
  }
  if (e.target.classList.contains("comment")) {
    displayImage(parseInt(e.target.id, 10));
  }
  if (e.target.id === "popupComment") {
    e.preventDefault();
    const id = e.target.parentElement.id.match(/[0-9]/g);
    const userName = document.getElementById("userName");
    const comment = document.getElementById("comment-box-id");
    addComment(id, userName.value, comment.value);
    userName.value = "";
    comment.value = "";
  }
});