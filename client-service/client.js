const axios = require("axios");


axios
  .get(`http://$198.168.100.10:3000/api`)
  .then(response => {
    console.log("Response from server:", response.data);
  })
  .catch(error => {
    console.error("Error connecting to server:", error.message);
  });
