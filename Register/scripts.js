function myFunction() {
  var x = document.getElementById("passwords");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function validateForm() {

  var errormessage = "";
  var choice = document.getElementById("checkbox").checked;
  var gender1 = document.getElementById("male").checked;
  var gender2 = document.getElementById("female").checked;

  if (document.getElementById('fname').value == "") {
    errormessage += "Name must be filled out!\n";
    document.getElementById('fname').style.borderColor = "red";
  }
  if (document.getElementById('email').value == "") {
    errormessage += "Email must be filled out!\n";
    document.getElementById('email').style.borderColor = "red";
  }
  if (document.getElementById('passwords').value == "") {
    errormessage += "Password must be filled out!\n";
    document.getElementById('passwords').style.borderColor = "red";
  }
  if (document.getElementById('address').value == "") {
    errormessage += "Address must be filled out!\n";
    document.getElementById('address').style.borderColor = "red";
  }
  if(gender1== "" && gender2 ==""){
    errormessage += "You must choose at lease one gender!\n";
  }   
  if (document.getElementById('skintype').value == "") {
    errormessage += "Skintype must be filled out!\n";
    document.getElementById('skintype').style.borderColor = "red";
  }
  if(choice == ""){
    errormessage += "You must agree to the term and condition!\n";
  }   
  if (errormessage != ""){
      alert(errormessage);
      return false;
  }
}
