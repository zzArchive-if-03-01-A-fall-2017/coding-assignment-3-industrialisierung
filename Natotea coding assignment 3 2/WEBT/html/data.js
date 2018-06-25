window.onload = function()
{
  let url = "http://leotux.htl-leonding.ac.at:3000/users";
  let registerButton = document.querySelector("#submitRegistration");
  registerButton.onclick = function() {
    let pswRegister2ForCheck = document.getElementById('pswRegister2').value;
    let pswRegisterForCheck = document.getElementById('pswRegister').value;

    if(pswRegister2ForCheck != pswRegisterForCheck){
      alert("Diffrent passwords!");
    }
    else {
      let xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

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
  let loginButton = document.querySelector("#getLogin");
  loginButton.onclick = function() {
    alert("Check if it goes in");
    let loginName = document.getElementById('userName').value;
    let loginPsw = document.getElementById('psw').value;
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET',url);
    xhr.setRequestHeader("Content-type","application/json");
    var data = xhr.responseText;
    var uploadResult = data['message']
    console.log('responseText:',uploadResult);

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        alert("Login succesful");
      }
    }
    xhr.send();
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
