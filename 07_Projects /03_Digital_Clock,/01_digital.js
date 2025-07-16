const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date(); // 'Date' should be capitalized
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
