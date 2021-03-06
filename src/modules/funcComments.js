import { getData, postData } from './get-post-data.js';
import { commentLink } from './API-links.js';

const countingElementsFunc = (elem) => elem.childElementCount;

function countingItems() {
  const item = document.querySelector('#item-count');
  const DynamicSection = document.querySelector('#addDynamicCards');
  item.innerHTML = `Space Pictures (${countingElementsFunc(DynamicSection)})`;
}

const commentStructure = (userName, textCommentStr) => {
  const ulDynamicCont = document.querySelector('#comentDynamicList');
  const LIST = document.createElement('li');
  LIST.innerHTML = `${userName} : ${textCommentStr}`;
  ulDynamicCont.appendChild(LIST);
};

const commentCounter = () => {
  const commentContainerCount = document.querySelector('#comentDynamicList');
  commentContainerCount.previousElementSibling.innerHTML = `Comments (${countingElementsFunc(
    commentContainerCount,
  )})`;
};

const showComment = (id) => {
  const getCommentFromAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rS93TYMaWFRcDHR1Rs9u/comments?item_id=${id}`;
  getData(getCommentFromAPI)
    .then((data) => data.forEach((comment) => commentStructure(comment.username, comment.comment)))
    .then(() => commentCounter())
    .catch(() => commentStructure('This image has', 'no comments yet'));
};

const postComment = (idComment, userName, commentStr) => {
  const dataComment = {
    item_id: idComment,
    username: userName,
    comment: commentStr,
  };
  postData(commentLink, dataComment)
    .then((data) => {
      if (data.status === 201) {
        commentStructure(userName, commentStr);
      }
    })
    .then(() => commentCounter())
    .catch(() => commentStructure('This image has', 'no comments yet'));
};

export {
  showComment,
  postComment,
  countingItems,
  countingElementsFunc,
  commentCounter,
};
