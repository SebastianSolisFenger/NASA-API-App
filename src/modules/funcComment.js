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

function structureFuncComment(userName, textCommentStr) {
  const ulDynamicCont = document.querySelector("#ul-comment-dynamic-link");
  const LIST = document.createElement("li");
  LIST.innerHTML = `${userName} : ${textCommentStr}`;
  ulDynamicCont.appendChild(LIST);
}

function showComments(id) {
  const apiLinkGetComments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rS93TYMaWFRcDHR1Rs9u/comments?item_id=${id}`;
  getData(apiLinkGetComments)
    .then((data) =>
      data.forEach((comment) =>
        structureFuncComment(comment.username, comment.comment)
      )
    )
    .then(() => commentsFuncCounting())
    .catch(() => structureFuncComment("There're no", "comments yet!"));
}

function addComment(idComment, userName, commentTextStr) {
  const dataComment = {
    item_id: idComment,
    username: userName,
    comment: commentTextStr,
  };
  postData(commentLinks, dataComment)
    .then((data) => {
      if (data.status === 201) {
        structureFuncComment(userName, commentTextStr);
      }
    })
    .catch(() => structureFuncComment("There're no", "comments yet!"));
}

export {
  countingElementsFunc,
  commentsFuncCounting,
  structureFuncComment,
  showComments,
  addComment,
};
