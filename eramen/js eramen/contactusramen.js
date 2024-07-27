function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var checkbox = document.getElementById("checkbox").checked;
  
    if (name.trim() === "") {
      alert("Please enter your name.");
      return false;
    }
  
    if (email.trim() === "") {
      alert("Please enter your email.");
      return false;
    }
  
    if (phone.trim() === "") {
      alert("Please enter your phone number.");
      return false;
    }
  
    if (message.trim() === "") {
      alert("Please enter your message.");
      return false;
    }
  
    if (!checkbox) {
      alert("Please agree to the terms and conditions.");
      return false;
    }
  
    alert("Form submitted successfully!");
    return true;
  }