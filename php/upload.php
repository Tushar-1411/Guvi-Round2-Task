<?php
// Set the upload directory
$uploadDir = 'uploads/';

// Check if the file was uploaded without errors
if(isset($_FILES["file"]) && $_FILES["file"]["error"] == 0){

    // Get file info
    $fileName = basename($_FILES["file"]["name"]);
    $fileType = pathinfo($fileName, PATHINFO_EXTENSION);
    $fileSize = $_FILES["file"]["size"];

    // Generate a unique name for the file to avoid overwriting
    $uniqueName = time() . '_' . uniqid() . '.' . $fileType;

    // Check if the file size is within the allowed limit (10MB)
    if($fileSize > 10000000){
        echo "File is too large. Maximum allowed size is 10MB.";
    } else {
        // Upload the file to the server
        if(move_uploaded_file($_FILES["file"]["tmp_name"], $uploadDir . $uniqueName)){
            echo "File uploaded successfully.";
        } else {
            echo "There was an error uploading the file.";
        }
    }
} else {
    echo "There was an error uploading the file.";
}
?>
