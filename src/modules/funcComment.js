import { getData, postData } from "./get-post-data.js";
import { commentLinks } from "./API-links.js";

function countingElementsFunc(elem) {
  return elem.childElementCount;
}

function commentsFuncCounting() {
  const commentContainerCount = document.querySelector(
    "#ul-comment-dynamic-link"
  );
  commentContainerCount.previousElementSibling.innerHTML = `Comments ${countingElementsFunc(
    commentContainerCount
  )}`;
}

function showComment(userName, textCommentStr) {
  const ulDynamicCont = document.querySelector("#ul-comment-dynamic-link");
  const li = document.createElement("li");
  li.innerHTML = `${userName} : ${textCommentStr}`;
  ulDynamicCont.appendChild(li);
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
