<?php
// start session
session_start();

// check if form is submitted
if(isset($_POST['login'])){

    // include database connection
    require_once('db.php');

    // get input values
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    // check if email and password are not empty
    if(!empty($email) && !empty($password)){

        // check if email exists in the database
        $sql = "SELECT * FROM users WHERE email = '$email'";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);

        // verify password
        if(mysqli_num_rows($result) == 1 && password_verify($password, $row['password'])){

            // set session variables
            $_SESSION['user_id'] = $row['id'];
            $_SESSION['user_email'] = $row['email'];
            $_SESSION['user_name'] = $row['username'];

            // redirect to profile page
            header("Location: profile.html");
            exit();

        } else {
            // show error message
            $error_msg = "Invalid email or password";
        }

    } else {
        // show error message
        $error_msg = "Please fill in all fields";
    }
}

?>
