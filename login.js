const forms = document.querySelector(".forms"),
passwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

passwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault();
 forms.classList.toggle("show-signup");
})
})

fetch('http://kketelauri-001-site1.gtempurl.com/api/user/adduser', {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({ 
      "userName": "keti4",
  "firstName": "keti4",
  "lastName": "ketelauri4",
  "email": "keti4@gmail.com",
  "privateNumber": "12345678914",
  "password": "123",
  "active": true})
})
 .then(response => response.json())
 .then(response => console.log(JSON.stringify(response)))
