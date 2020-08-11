function timeConversion(s) {
  let time = s.toLowerCase().split(":");
  const hours = +time[0];
  const _ampm = time[2];

  if (_ampm.indexOf("am") !== -1 && hours === 12) {
    time[0] = "00";
  }
  if (_ampm.indexOf("pm") !== -1 && hours < 12) {
    time[0] = hours + 12;
  }
  return time.join(":").replace(/(am|pm)/, "");
}

console.log(timeConversion("07:04:05PM"));
console.log(timeConversion("00:04:05PM"));
console.log(timeConversion("00:04:05AM"));
