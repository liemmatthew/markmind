function sendWhatsAppMessage() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var customerConsent = document.getElementById("customer-consent").checked;

  var message =
    "Username: " +
    username +
    "%0AEmail: " +
    email +
    "%0ACustomer Consent: " +
    customerConsent +
    "%0A%0AHalo markmind, boleh bertanya mengenai layanan?";

  window.location.href = "https://wa.me/+6281908678811/?text=" + message;
}

window.addEventListener("load", function () {
  const form = document.getElementById("usahaku-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Success!");
    });
  });
});

function setCheckValue() {
  const checkbox = document.getElementById("customer-consent");
  const form = document.getElementById("usahaku-form");
  form;
}

function printFormData() {
  const form = document.getElementById("usahaku-form");
  const formData = new FormData(form);
  console.log(Object.fromEntries(formData.entries()));
}
