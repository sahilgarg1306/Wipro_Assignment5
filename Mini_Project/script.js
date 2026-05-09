function validateEmail() {
  let emailInput = document.getElementById("exampleInputEmail1");
  let email = emailInput.value;
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  return emailPattern.test(email);
}

function validateName() {
  let nameInput = document.getElementById("exampleInputName");
  let name = nameInput.value;
  let namePattern = /^[a-zA-Z\s]+$/;
  return namePattern.test(name);
}

function validatePassword() {
  let passwordInput = document.getElementById("exampleInputPassword1");
  let password = passwordInput.value;
  let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  return passwordPattern.test(password);
}

function validateForm() {
  let name = document.getElementById("exampleInputName").value;
  let email = document.getElementById("exampleInputEmail1").value;
  let password = document.getElementById("exampleInputPassword1").value;

  try {
    // Empty field checks
    if (name === "") {
      throw new Error("Name field is empty");
    }

    if (email === "") {
      throw new Error("Email field is empty");
    }

    if (password === "") {
      throw new Error("Password field is empty");
    }

    // Pattern validations
    if (!validateName()) {
      throw new Error("Please enter a valid name.");
    }

    if (!validateEmail()) {
      throw new Error("Please enter a valid email.");
    }

    if (!validatePassword()) {
      throw new Error("Please enter a valid password.");
    }
    
    alert("Form submitted successfully!");
    return true;
  } 
  catch (error) {
    console.error("Error validating form: ", error.message);
    alert(error.message);
    return false;
  }
}
