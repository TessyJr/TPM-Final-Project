var page = 1;
showTab(page);
var condition1 = false;
var condition2= false;
var condition3 = false;
var condition4 = false;

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

function validateGroup() {
    var inputGroup = document.getElementById("group").value;
    if (inputGroup != "") {
      document.getElementById("groupInputGroup").style.borderColor = "green";
      condition1 = true;
    } else {
      document.getElementById("groupInputGroup").style.borderColor = "red";
      condition1 = false;
    }
}

function validatePass() {
    var inputPass = document.getElementById("password").value;
    var passRGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(inputPass.match(passRGEX)){
      document.getElementById("validationPass").style.display = "none";
      document.getElementById("groupInputPass").style.borderColor = "green";
      condition2 = true;
    } else {
      document.getElementById("validationPass").style.display = "block";
      document.getElementById("groupInputPass").style.borderColor = "red";
      condition2 = false;
    }
}

function confirmPass() {
    var inputPass = document.getElementById("password").value;
    var inputConfirmPass = document.getElementById("confirmPassword").value;
    if (inputConfirmPass == inputPass) {
      document.getElementById("confirmationPass").style.display = "none";
      document.getElementById("groupInputConfirm").style.borderColor = "green";
      condition3 = true;
    } else {
      document.getElementById("confirmationPass").style.display = "block";
      document.getElementById("groupInputConfirm").style.borderColor = "red";
      condition3 = false;
    }
}

function validateStatus() {
  var status1 = document.getElementById("binusian");
  var status2 = document.getElementById("nonBinusian");
  if(status1.checked == true || status2.checked == true) {
    document.getElementById("groupInputStatus").style.borderColor = "green";
    condition4 = true;
  } else {
    document.getElementById("groupInputStatus").style.borderColor = "red";
    condition4 = false;
  } 
}

function validateForm1() {
  validateGroup();
  validatePass();
  confirmPass();
  validateStatus();
  if (condition1 == true && condition2 == true && condition3 == true && condition4 == true) {
    next(1);
  }
}