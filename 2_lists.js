const glob = require("glob");
const fs = require("fs-extra");
const path = require("path");
const { listenerCount } = require("process");

// Find all JavaScript config files and convert them to JSON.
glob(
  "**/*",
  {
    ignore: ["index.js", "**/2_lists.js", "merge.js", "src/**", ".caches/**", "node_modules/**"],
  },
  (_, files) => {
    dirlists = [];
    files.forEach(async (file) => {
      dirlists.push(path.dirname(file));
    });

    dirfilters = [];
    dirlists.forEach(async (file) => {
      allow = true;
      dirfilters.forEach((element) => {
        if (element == file) allow = false;
      });
      if (allow) dirfilters.push(file);
    });

    dirfilters.forEach(async (filter) => {
      const fullPathJSON = `./${filter}/lists.json`;
      lists = [];
      files.forEach(async (file) => {
        if (path.dirname(file) == filter) {
          lists.push(path.basename(file));
        }
      });

      lists.push("lists.json");
      fs.writeFile(fullPathJSON, JSON.stringify(lists, null, 2), (writeErr) => {
        if (writeErr) {
          return console.error("Error writing to JSON file:", writeErr);
        }
      });
    });
  }
);
