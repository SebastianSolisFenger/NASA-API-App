function closeWindowPopup(IDtarget) {
  IDtarget.parentElement.parentElement.parentElement.remove();
}

const containerDynamicCards = document.getElementById('addDynamicCards');

function displayWindowPopup(image, title, infoDescrip, windowsId) {
  const popupWindowContainer = document.createElement('div');
  popupWindowContainer.classList.add('popupWindowClass');
  popupWindowContainer.innerHTML = `
    <div class="popupGrandContainer">
     <span><i class="fas fa-times" id="closePopUp"></i>
     </span>
     <div class="img-container-popup">
       <img src="${image}" class="popup-class-image" alt="image from the Api">
     </div>
     <h2>${title}</h2>
     <p class="descriptionPopup">${infoDescrip}</p>
     <div>
         <h2 class="commentsTitlePopup">Comments</h2>
         <ul id="ul-comment-dynamic-link">
         </ul>
       </div>
       <form id="${windowsId}form" action="post">
         <input type="text" placeholder="Your Name, please" id="userName">
         <textarea name="text" id="comment-box-id" cols="40" rows="15" placeholder="Comments here.."></textarea>
         <input type="button" value="Comment" id="popupComment">
       </form>
     </div>
     </div>`;
  containerDynamicCards.appendChild(popupWindowContainer);
}

export { closeWindowPopup, displayWindowPopup, containerDynamicCards };
