// In renderer process (web page).
const { ipcRenderer } = require("electron");

ipcRenderer.on("load_results", (event, arg) => {
  let report = "";
  let date = new Date();
  arg.terms.forEach(term => {
    report += `Instances of '${term.name}' found:\n`;
    term.instances.forEach(instance => {
      report += "\t" + instance + "\n";
    });
    report += "\n";
  });
  document.getElementsByTagName("pre")[0].innerHTML = report;
  document.getElementsByTagName("title")[0].innerHTML =
    "Report: " +
    (date.getMonth() + 1) +
    "/" +
    date.getDate() +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();
});
