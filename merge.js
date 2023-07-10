const { mergeToFile, mergeFiles } = require("./src/merge");
//

/* url to file */
const fileUrl1 = "https://assets.terra.money/cw20/pairs.dex.json"; // Replace with your file URL
const filePath1 = "cw20/pairs.dex.js"; // Replace with the desired local file path
mergeToFile(fileUrl1, filePath1);
//
/* url to file */
const fileUrl2 = "https://assets.terra.money/cw20/tokens.json"; // Replace with your file URL
const filePath2 = "cw20/tokens.js"; // Replace with the desired local file path
mergeToFile(fileUrl2, filePath2);
//
/* url to file */
const fileUrl3 = "https://assets.terra.money/ibc/tokens.json"; // Replace with your file URL
const filePath3 = "ibc/tokens.js"; // Replace with the desired local file path
mergeToFile(fileUrl3, filePath3);
//
/* url to file */
const fileUrl4 = "https://assets.terra.money/cw20/contracts.json"; // Replace with your file URL
const filePath4 = "cw20/contracts.js"; // Replace with the desired local file path
mergeToFile(fileUrl4, filePath4);
//

/* file to file */
const filePath_1A = "cw20/moneies.js"; // Replace with the desired local file path
const filePath_1B = "cw20/tokens.js"; // Replace with the desired local file path
mergeFiles(filePath_1A, filePath_1B);
//
/* file to file */
const filePath_2A = "ibc/moneies.js"; // Replace with the desired local file path
const filePath_2B = "ibc/tokens.js"; // Replace with the desired local file path
mergeFiles(filePath_2A, filePath_2B);
//
