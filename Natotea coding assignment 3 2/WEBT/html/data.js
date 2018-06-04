window.onload = function()
{

  let xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = function(){
    let storeButton = document.getElementById('login');
    storeButton.onclick = function()
    {
      let psw = document.getElementById('psw');
      let uname = document.getElementById('uname');

      localStorage.setItem(psw.id,psw.value);
      localStorage.setItem(uname.id,uname.value);
    }
    let registerButton = document.getElementById('register')
    registerButton.onclick = function()
    {
      let pswRegister = document.getElementById('pswRegister');
      let pswRegister2 = document.getElementById('pswRegister2');
      let unameRegister = document.getElementById('unameRegister');

      localStorage.setItem(pswRegister.id,pswRegister.value);
      localStorage.setItem(pswRegister2.id,pswRegister2.value);
      localStorage.setItem(unameRegister.id,unameRegister.value);
    }
  }
  xhr.open('POST','server.at/Dokumente/UpToDate/Industrialisierung/Natotea coding assignment 3 2/WEBT/JSON/Storage.json');
  //xhr.setRequestHeader("Content-type","application/json");
  xhr.setRequestHeader("Usernames","application/json");
  xhr.send(JSON.stringify(getRequestBody());
}
