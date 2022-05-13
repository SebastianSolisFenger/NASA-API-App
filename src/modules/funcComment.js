import { getScores, postScores } from "./get-post-data.js";
import { commentLink } from "./API-links.js";

function countElements(elem) {
  return elem.childElementCount;
}

// HERE

function countComments() {
  const commentCount = document.querySelector("#ul-comment-dynamic-link");
  commentCount.previousElementSibling.innerHTML = `Comments ${countElements(
    commentCount
  )}`;
}

function showComment(user, str) {
  const ulCont = document.querySelector("#ul-comment-dynamic-link");
  const li = document.createElement("li");
  li.innerHTML = `${user} : ${str}`;
  ulCont.appendChild(li);
}

function displayComments(id) {
  const showProper = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rS93TYMaWFRcDHR1Rs9u/comments?item_id=${id}`;
  getScores(showProper)
    .then((data) =>
      data.forEach((elem) => showComment(elem.username, elem.comment))
    )
    .then(() => countComments())
    .catch(() => showComment("no", "comments yet"));
}

function addComment(id, user, str) {
  const data = {
    item_id: id,
    username: user,
    comment: str,
  };
  postScores(commentLink, data)
    .then((data) => {
      if (data.status === 201) {
        showComment(user, str);
      }
    })
    .catch(() => showComment("no", "comments yet"));
}

export {
  countElements,
  countComments,
  showComment,
  displayComments,
  addComment,
};
