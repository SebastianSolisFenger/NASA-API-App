import { getData } from './get-post-data.js';

const commentStructure = (userName, textCommentStr) => {
  const ulDynamicCont = document.querySelector('#ul-comment-dynamic-link');
  const LIST = document.createElement('li');
  LIST.innerHTML = `${userName} : ${textCommentStr}`;
  ulDynamicCont.appendChild(LIST);
};

const showComment = (id) => {
  const getCommentFromAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rS93TYMaWFRcDHR1Rs9u/comments?item_id=${id}`;
  getData(getCommentFromAPI)
    .then((data) => data.forEach((comment) => commentStructure(comment.username, comment.comment)))
    .catch(() => commentStructure('This image has', 'no comments yet'));
};

export { commentStructure, showComment };
