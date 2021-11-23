const xmasEndDate = new Date("December 24, 2021 24:00:00").getTime();

console.log(xmasEndDate);

const runFunction = setInterval(() => {
  const today = new Date().getTime();

  const timeRemainingBeforeXmas = xmasEndDate - today;

  const days = Math.floor(timeRemainingBeforeXmas / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (timeRemainingBeforeXmas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (timeRemainingBeforeXmas % (1000 * 60 * 60 * 60)) / (1000 * 60)
  );

  const seconds = Math.floor(
    (timeRemainingBeforeXmas % (1000 * 60 * 60)) / 1000
  );

  const dayDiv = (document.querySelector(".day").innerHTML = `${days} days`);

  const hoursDiv = (document.querySelector(
    ".hours"
  ).innerHTML = ` ${hours} hours`);

  const minutesDiv = (document.querySelector(
    ".minutes"
  ).innerHTML = ` ${minutes} minutes`);

  const secondsDiv = (document.querySelector(
    ".seconds"
  ).innerHTML = `${seconds} seconds`);

  const xmasDiv = document.querySelector(".xmasishere");

  if (timeRemainingBeforeXmas < 0) {
    clearInterval(runFunction);
    hoursDiv.innerHTML = "";
    dayDiv.innerHTML = "";
    minutesDiv.innerHTML = "";
    secondsDiv.innerHTML = "";
    xmasDiv.innerHTML = `<div class="xmasishere"> FATHER CHRISTMAS IS HERE!</div>`;
  }
}, 1000);

// var countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();
