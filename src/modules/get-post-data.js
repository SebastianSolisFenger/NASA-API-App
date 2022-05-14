const getData = async (urlApi) => {
  const responseData = await fetch(urlApi);
  return responseData.json();
};

const postData = async (urlApi, data) => {
  const responseData = await fetch(urlApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return responseData;
};

export { getData, postData };
