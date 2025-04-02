function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  }
  
  emailjs.send("service_89risq9", "template_mkw48na", parms)
}