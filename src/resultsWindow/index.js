// In renderer process (web page).
const { ipcRenderer } = require("electron");

ipcRenderer.on("load_results", (event, arg) => {
  let report = "";
  arg.terms.forEach(term => {
    report += term.name + "\n";
    term.instances.forEach(instance => {
      report += "\t" + instance + "\n";
    });
    report += "\n";
  });
  document.getElementsByTagName("pre")[0].innerHTML = report;
});
