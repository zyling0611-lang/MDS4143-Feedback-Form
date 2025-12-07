document.getElementById("feedbackForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let ic = document.getElementById("ic").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let rating = document.getElementById("rating").value.trim();
  let msg = document.getElementById("msg").value.trim();

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let icRegex = /^\d{6}-\d{2}-\d{4}$/;
  let phoneRegex = /^\d{2,4}-\d{7,8}$/;

  let valid = true;

  function showError(id, condition){
    document.getElementById(id).style.display = condition ? "none" : "block";
    if(!condition) valid = false;
  }

  showError("nameError", name !== "");
  showError("emailError", emailRegex.test(email));
  showError("icError", icRegex.test(ic));
  showError("phoneError", phoneRegex.test(phone));
  showError("ratingError", rating !== "");
  showError("msgError", msg !== "");

  if(valid){
    alert("🎉 Feedback submitted successfully!");
    this.reset();
  }
});
