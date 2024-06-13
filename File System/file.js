const fs = require("fs");

fs.copyFileSync("source.txt", "destination.txt");

fs.writeFile("message.txt", "Yo, Kaizer!", (err) => {
    if (err) throw err;
    console.log("File Written!");
});

fs.readFile("message.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});
