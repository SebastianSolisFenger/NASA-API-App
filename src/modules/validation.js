/* eslint-disable no-undef */
const userError = () => {
  userName.placeholder = 'Please enter your name';
  userName.style.backgroundColor = '#ffc0cb';
  userName.style.border = '2px solid #bd1212';
};

const hideLoader = () => {
  document.querySelector('.spinner').style.display = 'none';
};

export { userError, hideLoader };