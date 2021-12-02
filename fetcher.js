const request = require("request");
const fs = require("fs");

const input = process.argv.slice(2);
const targetLink = input[0];
const filepath = input[1];

request(`https://${targetLink}/`, (error, response, body) => {
  if (error) {
    console.log("error:", error); // Print the error if one occurred
  }
  fs.writeFile(`${filepath}`, body, (err) => {
    if (err) {
      console.error("error", err);
    } else {
      console.log(
        `Downloaded and saved ${response.headers["content-length"]} bytes to ${filepath}`
      );
    }
  });
});
