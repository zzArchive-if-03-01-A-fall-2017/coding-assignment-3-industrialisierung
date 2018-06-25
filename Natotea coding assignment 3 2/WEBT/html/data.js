window.onload = function()
{
  let registerButton = document.querySelector("#submitRegistration");
  registerButton.onclick = function() {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    let url = "http://leotux.htl-leonding.ac.at:3000/users";
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-type","application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        alert("Registration succesful");
      }
    }
    let jsonString = JSON.stringify(getRequestBody());
    xhr.send(jsonString);
  }
}

function getRequestBody() {
  let pswRegister = document.getElementById('pswRegister').value;
  let pswRegister2 = document.getElementById('pswRegister2').value;
  let unameRegister = document.getElementById('unameRegister').value;
  return {
    username: unameRegister,
    password: pswRegister
  };
}
