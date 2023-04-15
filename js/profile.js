// define a variable to store the uploaded file
let uploadedFile;

// function to handle the change event of file input
function handleFileInput(event) {
  uploadedFile = event.target.files[0];
}

// function to handle the click event of upload button
function handleUploadClick(event) {
  event.preventDefault();
  // check if a file is selected
  if (uploadedFile) {
    // create a FormData object to store the uploaded file
    let formData = new FormData();
    formData.append("file", uploadedFile);
    // make an AJAX call to upload.php to handle file upload
    $.ajax({
      url: "php/upload.php",
      type: "POST",
      data: formData,
      contentType: false,
      processData: false,
      success: function (response) {
        // show a success message if file is uploaded successfully
        alert(response);
      },
      error: function () {
        // show an error message if file upload fails
        alert("File upload failed.");
      },
    });
  } else {
    alert("Please select a file to upload.");
  }
}

// function to handle the click event of save changes button
function handleSaveChangesClick(event) {
  event.preventDefault();
  // get the form data
  let firstName = $("#first-name").val();
  let lastName = $("#last-name").val();
  let age = $("#age").val();
  let gender = $("input[name='gender']:checked").val();
  let formData = new FormData();
  formData.append("firstName", firstName);
  formData.append("lastName", lastName);
  formData.append("age", age);
  formData.append("gender", gender);
  // make an AJAX call to profile.php to handle form submission
  $.ajax({
    url: "php/profile.php",
    type: "POST",
    data: formData,
    contentType: false,
    processData: false,
    success: function (response) {
      // show a success message if form data is submitted successfully
      alert(response);
    },
    error: function () {
      // show an error message if form submission fails
      alert("Form submission failed.");
    },
  });
}

// attach event listeners to upload button and file input
$("#upload-btn").on("click", handleUploadClick);
$("#file-input").on("change", handleFileInput);

// attach event listener to save changes button
$("#save-changes-btn").on("click", handleSaveChangesClick);
