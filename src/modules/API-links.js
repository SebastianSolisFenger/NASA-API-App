const getLink =
  "https://api.nasa.gov/planetary/apod?api_key=yE5XwF3YBRu6RaMb2K328lXJabWCog5rzjaIR76N&start_date=2022-04-10&end_date=2022-04-21";
const datesForPopup = [
  "2022-04-10",
  "2022-04-11",
  "2022-04-12",
  "2022-04-13",
  "2022-04-14",
  "2022-04-15",
  "2022-04-16",
  "2022-04-17",
  "2022-04-18",
  "2022-04-19",
  "2022-04-20",
  "2022-04-21",
];
const getDataDateImage = (num) =>
  `https://api.nasa.gov/planetary/apod?api_key=yE5XwF3YBRu6RaMb2K328lXJabWCog5rzjaIR76N&date=${datesForPopup[num]}`;

const starLink =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rS93TYMaWFRcDHR1Rs9u/likes";
const commentLink =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rS93TYMaWFRcDHR1Rs9u/comments";

export { getLink, getDataDateImage, starLink, commentLink };
