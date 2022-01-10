const btn = document.querySelector(".result-btn");

function getResult() {
  const nb1 = +document.getElementById("number1").value;
  const nb2 = +document.getElementById("number2").value;
  const nb3 = +document.getElementById("number3").value;
  var result = "Đây là tam giác bình thường";
  if ((nb1 === nb2 && nb1 !== nb3) || (nb1 === nb3 && nb1 !== nb2)) {
    result = "Đây là tam giác cân";
  } else if (
    nb1 === Math.sqrt(nb2 * nb2 + nb3 * nb3) ||
    nb2 === Math.sqrt(nb1 * nb1 + nb3 * nb3) ||
    nb3 === Math.sqrt(nb2 * nb2 + nb1 * nb1)
  ) {
    result = "Đây là tam giác vuông";
  } else if (nb1 === nb2 && nb2 === nb3) {
    result = "Đây là tam giác đều";
  }
  alert(result);
}
