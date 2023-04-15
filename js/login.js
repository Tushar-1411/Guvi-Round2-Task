$(document).ready(function() {
    $("#login-form").submit(function(event) {
      event.preventDefault(); // prevent default form submission
    
      var email = $("#email").val();
      var password = $("#password").val();
  
      $.ajax({
        url: "php/login.php",
        method: "POST",
        data: {
          email: email,
          password: password
        },
        success: function(response) {
          // Handle successful login
          console.log(response);
          // redirect to profile page
          window.location.href = "profile.html";
        },
        error: function(response) {
          // Handle login error
          console.log(response);
          $("#error-message").html(response.responseText);
        }
      });
    });
  });
  