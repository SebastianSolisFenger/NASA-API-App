const getNasaApi =
  "https://api.nasa.gov/planetary/apod?api_key=yE5XwF3YBRu6RaMb2K328lXJabWCog5rzjaIR76N&start_date=2022-04-10&end_date=2022-04-18";

const randomDatesForPopupImgs = [
  "2022-04-10",
  "2022-04-11",
  "2022-04-12",
  "2022-04-13",
  "2022-04-14",
  "2022-04-15",
  "2022-04-16",
  "2022-04-17",
  "2022-04-18",
];

const getDataDateImage = (num) =>
  `https://api.nasa.gov/planetary/apod?api_key=yE5XwF3YBRu6RaMb2K328lXJabWCog5rzjaIR76N&date=${randomDatesForPopupImgs[num]}`;

const likeLink =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rS93TYMaWFRcDHR1Rs9u/likes";

const commentLinks =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rS93TYMaWFRcDHR1Rs9u/comments";

export { getNasaApi, getDataDateImage, likeLink, commentLinks };
