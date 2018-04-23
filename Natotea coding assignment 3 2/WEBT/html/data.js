
function setStore() {
  var uname = document.getElementById('uname');
  var psw = document.getElementById('psw');

  localStorage.setItem("UserName",uname);
  localStorage.setItem("Password",psw);

}
