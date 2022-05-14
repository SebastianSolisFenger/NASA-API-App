import { getData, postData } from "./get-post-data.js";
import { commentLinks } from "./API-links.js";

function countingElementsFunc(elem) {
  return elem.childElementCount;
}

function commentsFuncCounting() {
  const commentCount = document.querySelector("#ul-comment-dynamic-link");
  commentCount.previousElementSibling.innerHTML = `Comments ${countingElementsFunc(
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
  getData(showProper)
    .then((data) =>
      data.forEach((elem) => showComment(elem.username, elem.comment))
    )
    .then(() => commentsFuncCounting())
    .catch(() => showComment("There're no", "comments yet!"));
}

function addComment(id, user, str) {
  const data = {
    item_id: id,
    username: user,
    comment: str,
  };
  postData(commentLinks, data)
    .then((data) => {
      if (data.status === 201) {
        showComment(user, str);
      }
    })
    .catch(() => showComment("There're no", "comments yet!"));
}

export {
  countingElementsFunc,
  commentsFuncCounting,
  showComment,
  displayComments,
  addComment,
};
