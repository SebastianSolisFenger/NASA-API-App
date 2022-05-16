import './style.css';
import { getNasaApi } from './modules/API-links.js';
import { getData } from './modules/get-post-data.js';

const containerDynamicCards = document.getElementById('addDynamicCards');

const addFirstInterfaceCard = (image, titleCard, indexCard) => {
  const card = document.createElement('div');
  card.classList.add('cardContainer');
  card.innerHTML = `
  <div class="imgCardcontainer">
  <img src="${image}" add="Image provided by Nasa's Api">
  </div>
  <div class="title">
  <h3>${titleCard}</h3>
  <a href="#" id="${indexCard}star" class="like"><i class="fas fa-heart"></a>
  </div>
  <small class="small-class"></small>
  <input type="button" value="Comments" id="${indexCard}" class="comment">

  `;
  containerDynamicCards.appendChild(card);
};

function displayImage() {
  getData(getNasaApi).then((data) => {
    containerDynamicCards.innerHTML = '';
    data.forEach((card) => addFirstInterfaceCard(card.hdurl, card.title));
  });
}

displayImage();
