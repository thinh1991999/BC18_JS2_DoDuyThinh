const btn = document.querySelector(".result-btn");

function sort() {
  const nb1 = +document.getElementById("number1").value;
  const nb2 = +document.getElementById("number2").value;
  const nb3 = +document.getElementById("number3").value;
  var result;
  if (nb1 <= nb2 && nb2 <= nb3) {
    result = "sort:" + nb1 + "," + nb2 + "," + nb3;
  } else if (nb1 <= nb3 && nb3 <= nb2) {
    result = "sort:" + nb1 + "," + nb3 + "," + nb2;
  } else if (nb2 <= nb3 && nb3 <= nb1) {
    result = "sort:" + nb2 + "," + nb3 + "," + nb1;
  } else if (nb2 <= nb1 && nb1 <= nb3) {
    result = "sort:" + nb2 + "," + nb1 + "," + nb3;
  } else if (nb3 <= nb1 && nb1 <= nb2) {
    result = "sort:" + nb3 + "," + nb1 + "," + nb2;
  } else {
    result = "sort:" + nb3 + "," + nb2 + "," + nb1;
  }
  alert(result);
}
