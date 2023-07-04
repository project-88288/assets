const https = require("https");
const fs = require("fs");

const fileUrl = "https://assets.terra.money/cw20/pairs.dex.json"; // Replace with your file URL
const filePath = "./cw20/_pairs.dex.json"; // Replace with the desired local file path
const pairsPath = "./cw20/pairs.dex.js";
console.log(fileUrl);
console.log(filePath);
const networks = ["mainnet", "classic", "testnet"];
const file = fs.createWriteStream(filePath);
//
let merge = {};
merge["localterra"] = {};
//
https.get(fileUrl, (response) => {
  response.pipe(file);

  file
    .on("finish", () => {
      file.close();
      console.log("File downloaded successfully.");
      const assets_pairs = require(filePath);
      const pairs_dex = require(pairsPath);

      networks.forEach((element) => {
        merge[element] = Object.assign({}, assets_pairs[element], pairs_dex[element]);
      });

      const data = `module.exports = ${JSON.stringify(merge, null, 2)};\n`;

      fs.writeFile(pairsPath, data, "utf8", (err) => {
        if (err) {
          console.error("Error writing file:", err);
          return;
        }
      });
    })
    .on("error", (error) => {
      console.error("Error downloading file:", error);
    });
});
