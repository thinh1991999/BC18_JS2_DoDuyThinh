const btn = document.querySelector(".result-btn");

function getResult() {
  const day = +document.getElementById("number1").value;
  const month = +document.getElementById("number2").value;
  const year = +document.getElementById("number3").value;
  var prevDate = "";
  var nextDate = "";
  switch (day) {
    case 1:
      if (month !== 1) {
        const prevMonth = month - 1;
        prevDate = "Ngày trước đó:" + 31 + "-" + prevMonth + "-" + year;
      } else {
        const prevYear = year - 1;
        prevDate = "Ngày trước đó:" + 31 + "-" + 12 + "-" + prevYear;
      }
      break;
    default:
      const prevDay = day - 1;
      prevDate = "Ngày trước đó:" + prevDay + "-" + month + "-" + year;
  }
  switch (day) {
    case 31:
      if (month !== 12) {
        const nextMonth = month + 1;
        nextDate = "Ngày sau đó:" + 1 + "-" + nextMonth + "-" + year;
      } else {
        const nextYear = year + 1;
        nextDate = "Ngày sau đó:" + 1 + "-" + 1 + "-" + nextYear;
      }
      break;
    default:
      const nextDay = day + 1;
      nextDate = "Ngày sau đó:" + nextDay + "-" + month + "-" + year;
  }
  var result = prevDate + "-------" + nextDate;
  alert(result);
}
