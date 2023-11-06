import fetch from "node-fetch";

const jsonTypicode = "https://randomfox.ca/floof/";

const fetchData = async (apiEndPoint) => {
  const response = await fetch(apiEndPoint);
  try {
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

fetchData(jsonTypicode);
