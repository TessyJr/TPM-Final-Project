var page = 1;
showTab(page);

function showTab(n) {
    if (n == 1) {
        document.getElementById("form2").style.display = "none";
        document.getElementById("form3").style.display = "none";
        document.getElementById("form1").style.display = "block";
      } else if (n == 2) {
        document.getElementById("form1").style.display = "none";
        document.getElementById("form3").style.display = "none";
        document.getElementById("form2").style.display = "block";
      } else if (n == 3) {
        document.getElementById("form1").style.display = "none";
        document.getElementById("form2").style.display = "none";
        document.getElementById("form3").style.display = "block";
      }
}

function next(x) {
    page = page + x;
    showTab(page);
}

function back(x) {
    page = page + x;
    showTab(page);
}

