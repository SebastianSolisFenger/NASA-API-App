const getData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const postData = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export { getData, postData };
