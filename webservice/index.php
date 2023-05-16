<?php
//Include the database
require_once "includes/actions.php";

if (!isset($_GET['id'])) {
    $data = getMovie();
} else {
    $data = getMovieDetails($_GET['id']);
}

header("Content-Type: application/json");
echo json_encode($data);
exit;
