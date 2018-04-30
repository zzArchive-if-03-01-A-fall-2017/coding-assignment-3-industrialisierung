window.onload = function()
{
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
