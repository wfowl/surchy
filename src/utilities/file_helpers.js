import path from "path";
import fs from "fs";

/**
 *
 * @param {string} dir - directory to pull files from
 * @param {boolean} recursive - search any directories you find recursively if this is true
 */
export function getFilesFromDir(dir, recursive = false) {
  const dirList = fs.readdirSync(dir);
  let files = [];
  let fullPath;
  let item;

  if (recursive) {
    for (let i = 0; i < dirList.length; i++) {
      item = dirList[i];
      fullPath = path.join(dir, item);
      if (fs.statSync(fullPath).isDirectory()) {
        files = files.concat(getFilesFromDir(fullPath, recursive));
      } else {
        files.push(fullPath);
      }
    }
  } else {
    files = dirList.filter(item => {
      fullPath = path.join(dir, item);
      return !fs.statSync(fullPath).isDirectory();
    });
  }

  return files;
}

/**
 *
 * @param {string[]} files - array containing files to search
 * @param {string} needles - array containing search terms
 */
export function filesContainsContent(files, needles) {
  files.forEach(filePath => {
    needles.forEach(needle => {
      if (contentInFile(filePath, needle)) {
        console.log(needle + " found in: " + filePath);
      }
    });
  });
}

/**
 *
 * @param {string} fullPath - full file path
 * @param {string} content - content to searh for
 */
export function contentInFile(fullPath, content) {
  return fs.readFileSync(fullPath, { encoding: "utf8" }).indexOf(content) > -1;
}
