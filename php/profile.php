<?php
// Connect to the MongoDB server
$mongoClient = new MongoClient("mongodb://localhost:27017");

// Select the database and the collection
$db = $mongoClient->selectDB('db');
$collection = $db->selectCollection('mongodb');

// Create an associative array with the data
$data = array(
    'first_name' => $_POST['first_name'],
    'last_name' => $_POST['last_name'],
    'age' => $_POST['age'],
    'gender' => $_POST['gender'],
    'profile_photo' => $_POST['profile_photo']
    // Add other fields here
);

// Insert the data into the collection
$result = $collection->insertOne($data);

// Check if the insertion was successful
if ($result->getInsertedCount() == 1) {
    echo "Data inserted successfully.";
} else {
    echo "Error inserting data.";
}
?>
