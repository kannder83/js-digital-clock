let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("seconds");
let doublepoint = document.getElementsByTagName("span");

let clock = setInterval(function time() {
  let date_now = new Date();
  let hr = date_now.getHours();
  let min = date_now.getMinutes();
  let sec = date_now.getSeconds();

  if (hr < 10) {
    hr = `0${hr}`;
  }

  if (min < 10) {
    min = `0${min}`;
  }

  if (sec < 10) {
    sec = `0${sec}`;
  }

  if (
    doublepoint[0].style.color == "transparent" ||
    doublepoint[1].style.color == "transparent"
  ) {
    doublepoint[0].style.color = "#090909";
    doublepoint[1].style.color = "#090909";
  } else {
    doublepoint[0].style.color = "transparent";
    doublepoint[1].style.color = "transparent";
  }

  hour.innerHTML = hr;
  minute.innerHTML = min;
  seconds.innerHTML = sec;
}, 1000);
