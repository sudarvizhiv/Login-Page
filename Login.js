const form = document.getElementById("login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const username = form.username.value;
  const password = form.password.value;
  
  if(username==='admin'&&password==='password')
  {
    window.location.href='file:///C:/Users/sudarvizhi/Desktop/learning/Page.html#'
  }
  else{
  form.reset();
  }
});

