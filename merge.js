const { mergeToFile, mergeFiles } = require("./src/merge");

const fileUrl1 = "https://assets.terra.money/cw20/pairs.dex.json"; // Replace with your file URL
const filePath1 = "cw20/pairs.dex.js"; // Replace with the desired local file path
//
const fileUrl2 = "https://assets.terra.money/cw20/tokens.json"; // Replace with your file URL
const filePath2 = "cw20/tokens.js"; // Replace with the desired local file path
//
const fileUrl3 = "https://assets.terra.money/ibc/tokens.json"; // Replace with your file URL
const filePath3 = "ibc/tokens.js"; // Replace with the desired local file path

//mergeToFile(fileUrl1,filePath1)
//mergeToFile(fileUrl2,filePath2)
//mergeToFile(fileUrl3,filePath3)
//
const filePath4 = "ibc/moneies.js"; // Replace with the desired local file path
const filePath5 = "ibc/tokens.js"; // Replace with the desired local file path

const filePath6 = "ibc/moneies.js"; // Replace with the desired local file path
const filePath7 = "ibc/tokens.js"; // Replace with the desired local file path

mergeFiles(filePath4, filePath5);
mergeFiles(filePath6, filePath7);
//
