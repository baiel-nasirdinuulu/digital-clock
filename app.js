window.onload = function () {
  const hourElement = document.querySelector("#hour");
  const minutesElement = document.querySelector("#minutes");
  const secondsElement = document.querySelector("#seconds");
  const amElement = document.querySelector("#ampm");

  function clockDate1() {
    let hourTime = new Date().getHours();
    let minutesDate = new Date().getMinutes();
    let secndsDate = new Date().getSeconds();
    let ampm = "Am";

    if (hourTime > 12) {
      hourTime -= 12;
      ampm = "Pm";
    }
    hourElement.innerText = hourTime;
    minutesElement.innerText = minutesDate;
    secondsElement.innerText = secndsDate;
    amElement.innerText = ampm;

    setTimeout(() => {
      clockDate1();
    }, 1000);
  }
  clockDate1();
};
