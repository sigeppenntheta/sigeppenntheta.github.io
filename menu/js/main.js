// Fetch appropriate data and set it to HTML elements
function successFunc(data) {
  document.getElementById("monday-lunch").innerHTML = data[0]["Lunch"];
  document.getElementById("monday-dinner").innerHTML = data[0]["Dinner"];

  document.getElementById("tuesday-lunch").innerHTML = data[1]["Lunch"];
  document.getElementById("tuesday-dinner").innerHTML = data[1]["Dinner"];

  document.getElementById("wednesday-lunch").innerHTML = data[2]["Lunch"];
  document.getElementById("wednesday-dinner").innerHTML = data[2]["Dinner"];

  document.getElementById("thursday-lunch").innerHTML = data[3]["Lunch"];
  document.getElementById("thursday-dinner").innerHTML = data[3]["Dinner"];

  document.getElementById("friday-lunch").innerHTML = data[4]["Lunch"];
}

// Read whole spreadsheet
// This sheet is linked to https://docs.google.com/spreadsheets/d/1pGGsYz5Y6Hn18nqH6HfYSzWz1FjoNVrHBsMFVNDRlpI/edit#gid=0
// which is accessible to the sigep dev gmail account (message Eran for details)
function main() {
    Sheetsu.read("https://sheetsu.com/apis/v1.0bu/6c89e9406c1f", {}, successFunc);
}
