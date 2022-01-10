const btn = document.querySelector(".result-btn");

function getResult() {
  // const day = +document.getElementById("number1").value;
  const month = +document.getElementById("number2").value;
  const year = +document.getElementById("number3").value;
  var countDay;
  if (year % 4 === 0) {
    if (month === 2) {
      countDay = 29;
    }
  } else {
    countDay = 28;
  }
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      countDay = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      countDay = 30;
      break;
    default:
      break;
  }
  alert(countDay);
}
