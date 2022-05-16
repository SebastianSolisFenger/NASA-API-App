import './style.css';

const getNasaApi = 'No neccesary yet';

const containerDynamicCards = document.getElementById('addDynamicCards');

const getData = async (urlApi) => {
  const responseData = await fetch(urlApi);
  return responseData.json();
};

const addFirstInterfaceCard = (image, titleCard, indexCard) => {
  const card = document.createElement('div');
  card.classList.add('cardContainer');
  card.innerHTML = `
        <div class="imgCardcontainer">
          <img src="${image}" alt="Image provided by Nasa's Api">
        </div>
        <div class="title">
          <h3>${titleCard}</h3>
          <a href="#" id="${indexCard}star" class="like"><i class="fas fa-heart"></i></a>
        </div>
        <small class='small-class'>2 likes</small>
        <input type="button" value="Comments" id="${indexCard}" class="comment">
        `;
  containerDynamicCards.appendChild(card);
};

const displayImage = () => {
  getData(getNasaApi).then((data) => {
    containerDynamicCards.innerHTML = '';
    data.forEach((elem) => addFirstInterfaceCard(elem.hdurl, elem.title));
  });
};

displayImage();
