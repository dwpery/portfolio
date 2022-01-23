window.onload = function () {alert("Work in progress")}

function toggleSelectionBox() {
  var x = document.getElementById("selectionBox");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
