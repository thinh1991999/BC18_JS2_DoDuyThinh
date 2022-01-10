const btn = document.querySelector(".result-btn");

function getResult() {
  const nb1 = +document.getElementById("number1").value;
  const nb2 = +document.getElementById("number2").value;
  const nb3 = +document.getElementById("number3").value;
  var soLe = 0;
  if (nb1 % 2 !== 0) {
    soLe++;
  }
  if (nb2 % 2 !== 0) {
    soLe++;
  }
  if (nb3 % 2 !== 0) {
    soLe++;
  }
  var soChan = 3 - soLe;
  var result = "Số lẻ:" + soLe + ",Số chẵn:" + soChan;
  alert(result);
}
