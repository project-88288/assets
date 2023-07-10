const https = require("https");
const fs = require("fs");
const path = require("path");

async function mergeToFile(fileUrl_, filePath_) {
  //
  const fileName = path.basename(filePath_);
  const folderName = path.dirname(filePath_);
  const parrentPath = path.dirname(path.dirname(__filename));
  const cashesFolder = path.join(parrentPath, ".caches");
  try {
    await fs.mkdirSync(cashesFolder);
  } catch (error) {}
  const filePath = path.join(parrentPath, folderName, fileName);
  const cachesPath = path.join(parrentPath, ".caches", `${folderName}-${fileName}on`);
  //
  const networks = ["mainnet", "classic", "testnet"];
  const file = fs.createWriteStream(cachesPath);
  //
  let merge = {};
  merge["localterra"] = {};

  https.get(fileUrl_, (response) => {
    response.pipe(file);

    file
      .on("finish", () => {
        file.close();

        console.log(`File downloaded successfully from ${fileUrl_}.`);

        const srcassets = require(cachesPath);
        const desassets = require(filePath);

        networks.forEach((element) => {
          merge[element] = Object.assign({}, srcassets[element], desassets[element]);
        });

        const data = `module.exports = ${JSON.stringify(merge, null, 2)};\n`;

        fs.writeFile(filePath, data, "utf8", (err) => {
          if (err) {
            console.error("Error writing file:", err);
            return;
          }
          console.log(`Successful merge to ${filePath}.`);
        });
      })
      .on("error", (error) => {
        console.error("Error downloading file:", error);
      });
  });
}

async function mergeFiles(srcfilePath, desfilePath) {
  //
  const srcfileName = path.basename(srcfilePath);
  const srcfolderName = path.dirname(srcfilePath);
  const desfileName = path.basename(desfilePath);
  const desfolderName = path.dirname(desfilePath);
  const parrentPath = path.dirname(path.dirname(__filename));
  //
  const srcfilePath_ = path.join(parrentPath, srcfolderName, srcfileName);
  const desfilePath_ = path.join(parrentPath, desfolderName, desfileName);
  //
  const networks = ["mainnet", "classic", "testnet"];
  //
  let merge = {};
  merge["localterra"] = {};

  const srcassets = require(srcfilePath_);
  const desassets = require(desfilePath_);

  networks.forEach((element) => {
    merge[element] = Object.assign({}, srcassets[element], desassets[element]);
  });

  const data = `module.exports = ${JSON.stringify(merge, null, 2)};\n`;

  fs.writeFile(desfilePath_, data, "utf8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log(`Successful merge ${srcfilePath_} to ${desfilePath_}.`);
  });
}

module.exports = { mergeToFile, mergeFiles };
