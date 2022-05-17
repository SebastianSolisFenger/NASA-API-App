import './style.css';
import { getNasaApi, getDataDateImage } from './modules/API-links.js';
import { getData } from './modules/get-post-data.js';
import {
  containerDynamicCards,
  displayWindowPopup,
  closeWindowPopup,
} from './modules/pop-up.js';

const addFirstInterfaceCard = (image, titleCard, indexCard) => {
  const card = document.createElement('div');
  card.classList.add('cardContainer');
  card.innerHTML = `
  <div class="imgCardcontainer">
  <img src="${image}" add="Image provided by Nasa's Api">
  </div>
  <div class="title">
  <h3>${titleCard}</h3>
  <a href="#" id="${indexCard}star" class="like"><i class="fas fa-heart"></i></a>
  </div>
  <small class="small-class"></small>
  <input type="button" value="Comments" id="${indexCard}" class="comment">

  `;
  containerDynamicCards.appendChild(card);
};

const displayImage = (idImg) => {
  getData(getDataDateImage(idImg))
    .then((data) => displayWindowPopup(data.hdurl, data.title, data.infoDescript, idImg))
    .then(() => {
      const closePopupBtn = document.getElementById('closePopup');
      closePopupBtn.addEventListener('click', () => {
        closeWindowPopup(closePopupBtn);
      });
    })
    .catch((error) => console.log(error));
};

const showAmountOfLikes = () => {
  getData(getNasaApi)
    .then((data) => data.forEach((card, ind) => addFirstInterfaceCard(card.hdurl, card.title, ind)))
    .catch((error) => console.log(error));
};
showAmountOfLikes();

containerDynamicCards.addEventListener('click', (e) => {
  if (e.target.classList.contains('comment')) {
    displayImage(parseInt(e.target.id, 10));
  }
});
