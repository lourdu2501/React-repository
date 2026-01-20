
function getDays(month,year) {
  if (month === 2) {

    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
      return 29;
    } else {
      return 28;
    }
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  } else {
    return 31;
  }
}

//  Zeller formula → find which weekday the month starts
function zeller(month, year) {
  let m = month;
  let y = year;

  if (m == 1) {
    m = 13;  // Jan - 13
    y = y - 1;
  }
  if (m == 2) {
    m = 14;  // Feb - 14
    y = y - 1;
  }

  let q = 1;             // first day
  let k = y % 100;       // last two digits
  let j = Math.floor(y / 100);  // century

  let h = (q + Math.floor((13 * (m + 1)) / 5) + k +
    Math.floor(k / 4) +
    Math.floor(j / 4) +
    5 * j) % 7;

  // Convert Zeller output to: 0=Sun, 1=Mon,...
  let day = (h + 6) % 7;
  return day;
}
function calendar(date, month, year, highlight = true) {

  let totalDays = getDays(month, year);      //The number of days in the selected month.
  let startDay = zeller(month, year);;
  console.log("_______________________________________________________________   ");
  console.log("                  " + monthName(month) + " " + year);
  console.log("_______________________________________________________________   ");
  console.log("Sun Mon Tue Wed Thu Fri Sat");
  //  PRINT EMPTY SPACES (before day 1)
  let line = "";
  for (let i = 0; i < startDay; i++) {
    // 0 = Sunday / 1 = Monday / 2 = Tuesday / 3 = Wednesday / 4 = Thursday / 5 = Friday / 6 = Saturday
    line += "    "; // 4 spaces
  }

  //  PRINT ALL DATES
  for (let a = 1; a <= totalDays; a++) {

    let highlightDate = date;
    if (a === highlightDate) {

      let text = (a < 10 ? "  " + a : " " + a);
      line += "\x1b[31m" + text + "\x1b[0m ";  //  highlight here
      continue;
    }

    if (a < 10) {
      line += "  " + a + " ";  // add extra spacing
    } else {
      line += " " + a + " ";   // normal spacing
    }
    // END OF WEEK - print row
    if ((startDay + a) % 7 === 0) {   // to break from 7
      console.log(line);

      line = ""; // reset for next week
    }
  }

  //  PRINT dates in last week
  if (line !== "") {               // to stop from 
    console.log(line);
  }
}
function monthName(month) {
  return ["january", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][month - 1];

}
function remainingMonths(startMonth,year) {
  for (y = startMonth + 1; y <= 12; y++) {
    calendar(0, y, year, false);

  }
}
// RUN
calendar(12, 6, 2025);
remainingMonths(6, 2025);
