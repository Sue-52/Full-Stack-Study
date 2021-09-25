const fs = require("fs")

fs.writeFile(
  __dirname + "/content.txt",
  "sue",
  { encoding: "utf-8" },
  (error, data) => {
    if (error) throw err;
    console.log(data);
  }
);

fs.readFile(__dirname + "/content.txt", { enconding: "utf-8", flag: "r" }, (error, data) => {
  if (error) {
    console.log(error.message)
  }
  console.log(data)
})
