const timeEl = document.getElementById("currentTime");
timeEl.textContent = Date.now();
setInterval(() => {
  timeEl.textContent = Date.now();
}, 1000);