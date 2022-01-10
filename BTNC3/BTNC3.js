const btn = document.querySelector(".result-btn");

function getResult() {
  const number = +document.getElementById("number2").value;

  const hangTram = Math.floor(number / 100);
  const hangChuc = Math.floor((number - hangTram * 100) / 10);
  const hangDonVi = number - hangTram * 100 - hangChuc * 10;

  // const result = "" + hangTram + "-" + hangChuc + "-" + hangDonVi;
  var result;
  function getName(nb) {
    switch (nb) {
      case 1:
        return "một";
      case 2:
        return "hai";
      case 3:
        return "ba";
      case 4:
        return "bốn";
      case 5:
        return "năm";
      case 6:
        return "sáu";
      case 7:
        return "bảy";
      case 8:
        return "tám";
      case 9:
        return "chín";
      default:
        break;
    }
  }
  if (hangDonVi === 0) {
    if (hangChuc === 0) {
      result = getName(hangTram) + " trăm";
    } else {
      result = getName(hangTram) + " trăm " + getName(hangChuc) + " mươi";
    }
  } else {
    if (hangChuc === 0) {
      result = getName(hangTram) + " trăm lẻ" + getName(hangDonVi);
    } else {
      result =
        getName(hangTram) +
        " trăm " +
        getName(hangChuc) +
        " " +
        getName(hangDonVi);
    }
  }
  alert(result);
}
