document.getElementById("picture").addEventListener("change", function () {
    const file = this.files[0];
    const preview = document.getElementById("preview");
    const previewImage = document.getElementById("previewImage");
  
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.style.display = "block";
        previewImage.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      preview.style.display = "none";
      previewImage.src = "";
    }
  });
  
  document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
  
    alert(Thank you, ${name}, for registering! We will contact you at ${email} or ${phone}.);
  });