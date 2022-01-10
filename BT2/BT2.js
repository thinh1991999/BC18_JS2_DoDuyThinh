const btn = document.querySelector(".result-btn");

function hello() {
  const selectEL = document.getElementById("inputGroupSelect01").value;
  var result;
  switch (selectEL) {
    case "B":
      result = "Chào Bố";
      break;
    case "M":
      result = "Chào Mẹ";
      break;
    case "A":
      result = "Chào anh trai";
      break;
    case "E":
      result = "Chào em gái";
      break;
    default:
      break;
  }
  alert(result);
}
