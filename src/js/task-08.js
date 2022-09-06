// отримати доступ до форми
// додати preventDefault()

const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormDataWithCheck);

function onFormDataWithCheck(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  const data = {
    email,
    password
  };

if(email === '' || password === '') {
    alert("Please fill in all fields");
}

console.log(data);
form.reset();
}
