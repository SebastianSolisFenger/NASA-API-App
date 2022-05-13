function closeWindowPopup(target) {
  target.parentElement.parentElement.parentElement.remove();
}

const containerDynamicCards = document.getElementById("addDynamicCards");

function displayWindowPopup(img, title, description, id) {
  const popupDiv = document.createElement("div");
  popupDiv.classList.add("popupWindow");
  popupDiv.innerHTML = `
    <div class="popupContainer">
     <span><i class="fas fa-times" id="close"></i>
     </span>
     <div class="header-popup">
       <img src="${img}" class="popup-image" alt="close-icon">
     </div>
     <h2>${title}</h2>
     <p class="description">${description}</p>
     <div>
         <h2 class="comments">Comments</h2>
         <ul id="ul-comment-dynamic-link">
         </ul>
       </div>
       <form id="${id}form" action="post">
         <input type="text" placeholder="Your Name" id="userName">
         <textarea name="text" id="comment-box-id" cols="30" rows="10" placeholder="Your insights"></textarea>
         <input type="button" value="Comment" id="popupComment">
       </form>
     </div>
     </div>`;
  containerDynamicCards.appendChild(popupDiv);
}

export { closeWindowPopup, displayWindowPopup, containerDynamicCards };
