// Sets a cookie with name and value for optionally given duration of minutes
function setCookie(name,value,minutes) {
    var expires = "";
    if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + (minutes*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Fetch value of cookie given name
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// Remove cookie given name
function eraseCookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// Clear all cookies
const deleteAllCookies = () => {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

// Save values as cookies for 1 minute
function setDataCookies(data) {

    setCookie("monday-lunch", data[0]["Lunch"], 1);
    setCookie("monday-dinner", data[0]["Dinner"], 1);

    setCookie("tuesday-lunch", data[1]["Lunch"], 1);
    setCookie("tuesday-dinner", data[1]["Dinner"], 1);

    setCookie("wednesday-lunch", data[2]["Lunch"], 1);
    setCookie("wednesday-dinner", data[2]["Dinner"], 1);

    setCookie("thursday-lunch", data[3]["Lunch"], 1);
    setCookie("thursday-dinner", data[3]["Dinner"], 1);

    setCookie("friday-lunch", data[4]["Lunch"], 1);

    setCookie("last-updated", data[4]["Dinner"], 1);

    // console.log('saving cookies');
}

// Fetch appropriate data and set it to HTML elements
function successFunc(data) {

    // Set values to HTML elements
    document.getElementById("monday-lunch").innerHTML = data[0]["Lunch"];
    document.getElementById("monday-dinner").innerHTML = data[0]["Dinner"];

    document.getElementById("tuesday-lunch").innerHTML = data[1]["Lunch"];
    document.getElementById("tuesday-dinner").innerHTML = data[1]["Dinner"];

    document.getElementById("wednesday-lunch").innerHTML = data[2]["Lunch"];
    document.getElementById("wednesday-dinner").innerHTML = data[2]["Dinner"];

    document.getElementById("thursday-lunch").innerHTML = data[3]["Lunch"];
    document.getElementById("thursday-dinner").innerHTML = data[3]["Dinner"];

    document.getElementById("friday-lunch").innerHTML = data[4]["Lunch"];

    document.getElementById("last-updated").innerHTML = "Last Updated: " + data[4]["Dinner"];

    setDataCookies(data);
}

// Load values into HTML from cookies
function loadDataCookies() {

    // console.log('loading cookies');

    document.getElementById("monday-lunch").innerHTML = getCookie("monday-lunch");
    document.getElementById("monday-dinner").innerHTML = getCookie("monday-dinner");

    document.getElementById("tuesday-lunch").innerHTML = getCookie("tuesday-lunch");
    document.getElementById("tuesday-dinner").innerHTML = getCookie("tuesday-dinner");

    document.getElementById("wednesday-lunch").innerHTML = getCookie("wednesday-lunch");
    document.getElementById("wednesday-dinner").innerHTML = getCookie("wednesday-dinner");

    document.getElementById("thursday-lunch").innerHTML = getCookie("thursday-lunch");
    document.getElementById("thursday-dinner").innerHTML = getCookie("thursday-dinner");

    document.getElementById("friday-lunch").innerHTML = getCookie("friday-lunch");

    document.getElementById("last-updated").innerHTML = "Last Updated: " + getCookie("last-updated");
}

// Read whole spreadsheet
// This sheet is linked to https://docs.google.com/spreadsheets/d/1pGGsYz5Y6Hn18nqH6HfYSzWz1FjoNVrHBsMFVNDRlpI/edit#gid=0
// which is accessible to the sigep dev gmail account (message Eran for details)
function fetchFunc() {
    Sheetsu.read("https://sheetsu.com/apis/v1.0bu/6c89e9406c1f", {}, successFunc);
}

// Code ran on load
// If there are cookies, load value from cookies
// Otherwise, query sheet for values
function initialRun() {

    if (getCookie("monday-lunch") == null) {
        fetchFunc()
    }
    else {
        loadDataCookies()
    }

}
