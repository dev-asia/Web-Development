const { v4: uuidv4 } = require('uuid');
uuidv4(); // genrate random id

const jsonData = {
  "data": [
    {
      "id": uuidv4(),
      "username": "asia",
      "content": "work work and work"
    },
    {
      "id": uuidv4(),
      "username": "arooj",
      "content": "Hard work is very important for success"
    },
    {
      "id": uuidv4(),
      "username": "muryam",
      "content": "no problem for anything"
    }
  ]
};


// Now you can use the jsonData object in your JavaScript code
module.exports = jsonData;