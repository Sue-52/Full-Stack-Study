const fs = require("fs")

fs.readFile(__dirname + "/content.txt", { enconding: "utf-8", flag: "r" }, (error, data) => {
  if (error) {
    console.log(error.message)
  }
  console.log(data)
})