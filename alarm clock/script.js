//time
const sec = document.getElementById("sec");
const min = document.getElementById("min");
const hr = document.getElementById("hrs");
const time = document.getElementById("time");

//buttons
const set = document.getElementById("set");
const clear = document.getElementById("clear");
const stop = document.getElementById("stop");

//content boxes
const error = document.getElementById("error");
const list = document.getElementById("alarms");

//audio
const audio = document.getElementById("alarmsound");
audio.loop = true;

let alarms = [];

const set_time = () => {
  const d = new Date();
  sec.textContent = String(d.getSeconds()).padStart(2, "0");
  min.textContent = String(d.getMinutes()).padStart(2, "0");
  hr.textContent = String(d.getHours()).padStart(2, "0");
};

set_time();
setInterval(set_time, 1000);

const set_alarm = () => {
  const alarmtime = time.value;

  if (!alarmtime) {
    error.textContent = "Please Select a Time";
    return;
  }

  if (alarms.includes(alarmtime)) {
    error.textContent = "Alarm Already Exists";
    return;
  }

  error.textContent = "";
  alarms.push(alarmtime);

  const li = document.createElement("li");
  li.dataset.time = alarmtime;

  const alarmText = document.createElement("span");
  alarmText.textContent = alarmtime;

  const deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = "❌";
  deleteBtn.style.cursor = "pointer";

  deleteBtn.addEventListener("click", () => {
    alarms = alarms.filter((alarm) => alarm !== alarmtime);
    li.remove();
  });

  li.appendChild(alarmText);
  li.appendChild(deleteBtn);

  list.appendChild(li);
  time.value = "";
};

set.addEventListener("click", set_alarm);

const play_sound = () => {
  let date = new Date();

  const curr_time =
    String(date.getHours()).padStart(2, "0") +
    ":" +
    String(date.getMinutes()).padStart(2, "0");

  if (alarms.includes(curr_time)) {
    audio.play().catch((err) => {
      console.log("unable to play audio :", err);
    });
    error.textContent = "Alarm Ringing";

    alarms = alarms.filter((alarm) => alarm !== curr_time);

    const items = document.querySelectorAll("#alarms li");

    items.forEach((item) => {
      if (item.dataset.time === curr_time) {
        item.remove();
      }
    });
  }
};

setInterval(play_sound, 1000);

clear.addEventListener("click", () => {
  alarms = [];
  list.innerHTML = "";

  audio.pause();
  audio.currentTime = 0;

  error.textContent = "";
});

stop.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
  error.textContent = "";
});
