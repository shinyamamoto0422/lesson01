const time = process.argv[2];

const hours = Number(time.split(":")[0]);
const minutes = Number(time.split(":")[1]);

const newHours = hours + 1;
const newMinutes = (minutes + 45) % 60;

const logFunc = (h, m) => {
  console.log(h);
  console.log(m);
};

if (minutes + 45 >= 60) {
  if (newHours >= 24) {
    overHours = newHours % 24;
    logFunc(overHours, newMinutes);
  } else {
    logFunc(newHours, newMinutes);
  }
} else {
  logFunc(hours, newMinutes);
}
