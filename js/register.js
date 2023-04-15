$(document).ready(function() {
    // Handle form submission
    $('#register-btn').click(function(event) {
      // Prevent form from submitting
      event.preventDefault();
      // Get form data
      var name = $('#name').val();
      var email = $('#email').val();
      var password = $('#password').val();
      var confirmPassword = $('#confirm-password').val();
  
      // Validate form data
      if (name == '' || email == '' || password == '' || confirmPassword == '') {
        $('#response').html('<div class="alert alert-danger">Please fill all fields</div>');
        return;
      }
      if (password != confirmPassword) {
        $('#response').html('<div class="alert alert-danger">Passwords do not match</div>');
        return;
      }
  
      // Send AJAX request to server
      $.ajax({
        type: 'POST',
        url: 'php/register.php',
        data: {
          name: name,
          email: email,
          password: password
        },
        success: function(response) {
          // Handle server response
          if (response == 'success') {
            $('#response').html('<div class="alert alert-success">Registration successful!</div>');
          } else {
            $('#response').html('<div class="alert alert-danger">' + response + '</div>');
          }
        }
      });
    });
  
    // Handle password toggle button click
    $('#password-toggle-btn').click(function() {
      var inputField = $(this).closest('.form-group').find('input');
      if (inputField.attr('type') === 'password') {
        inputField.attr('type', 'text');
        $(this).html('<i class="bi bi-eye-slash"></i>');
        }
    })
})

