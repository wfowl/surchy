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
    for (let i = 0; i < dirList.length; i++) {
      item = dirList[i];
      fullPath = path.join(dir, item);
      if (!fs.statSync(fullPath).isDirectory()) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

/** TODO change this to return an array
 *
 * @param {string[]} files - array containing files to search
 * @param {string} needles - array containing search terms
 */
export function filesContainsContent(files, needles) {
  /**
   * The structure for this object is
   * {
   *  terms: [
   *    {
   *        name: '',
   *        instances: [
   *           '/path/to/file/filename.txt'
   *        ]
   *    }
   * ]
   * }
   */
  let report = { terms: [] };
  needles.forEach(needle => {
    report.terms.push({ name: needle, instances: [] });
  });

  files.forEach(filePath => {
    report.terms.forEach(term => {
      if (contentInFile(filePath, term.name)) {
        term.instances.push(filePath);
      }
    });
    // needles.forEach(needle => {
    //   if (contentInFile(filePath, needle)) {
    //     report += needle + " found in: " + filePath + "\n";
    //   }
    // });
  });

  console.log(report);
  return report;
}

/**
 *
 * @param {string} fullPath - full file path
 * @param {string} content - content to searh for
 */
export function contentInFile(fullPath, content) {
  return fs.readFileSync(fullPath, { encoding: "utf8" }).indexOf(content) > -1;
}
