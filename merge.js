const { mergeToFile, mergeFiles } = require("./src/merge");

const fileUrl1 = "https://assets.terra.money/cw20/pairs.dex.json"; // Replace with your file URL
const filePath1 = "cw20/pairs.dex.js"; // Replace with the desired local file path
mergeToFile(fileUrl1, filePath1);
//
const fileUrl2 = "https://assets.terra.money/cw20/tokens.json"; // Replace with your file URL
const filePath2 = "cw20/tokens.js"; // Replace with the desired local file path
mergeToFile(fileUrl2, filePath2);
//
const fileUrl3 = "https://assets.terra.money/ibc/tokens.json"; // Replace with your file URL
const filePath3 = "ibc/tokens.js"; // Replace with the desired local file path
mergeToFile(fileUrl3, filePath3);
//
const filePath4 = "cw20/moneies.js"; // Replace with the desired local file path
const filePath5 = "cw20/tokens.js"; // Replace with the desired local file path
mergeFiles(filePath4, filePath5);
//
const filePath6 = "ibc/moneies.js"; // Replace with the desired local file path
const filePath7 = "ibc/tokens.js"; // Replace with the desired local file path
mergeFiles(filePath6, filePath7);
//
