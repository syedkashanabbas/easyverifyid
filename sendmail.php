<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request']);
    exit;
}

// Collect form fields
$fullName         = $_POST['fullName'] ?? '';
$address          = $_POST['address'] ?? '';
$postcode         = $_POST['postcode'] ?? '';
$country          = $_POST['country'] ?? '';
$contactNumber    = $_POST['contactNumber'] ?? '';
$email1           = $_POST['email1'] ?? '';
$email2           = $_POST['email2'] ?? '';
$companyName      = $_POST['companyName'] ?? '';
$promoCode        = $_POST['promoCode'] ?? '';
$paymentGateway   = $_POST['paymentGateway'] ?? '';
$planTitle        = $_POST['planTitle'] ?? '';

$mail = new PHPMailer(true);

try {
    // SMTP Settings
    $mail->isSMTP();
    $mail->Host       = 'heckto.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'hrm@heckto.com';
    $mail->Password   = 'Hrm@0900-+$';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;

    // Sender
    $mail->setFrom('hrm@heckto.com', 'Heckto HRM');

    // Receiver
    $mail->addAddress('abbaskashan234@gmail.com', 'Accountant');

    // Subject
    $mail->Subject = "New ID Verification Order - $planTitle";

    // Body
    $mail->isHTML(true);
    $mail->Body = "
      <h2>New Order Submitted</h2>
      <p><strong>Plan:</strong> $planTitle</p>
      <p><strong>Full Name:</strong> $fullName</p>
      <p><strong>Address:</strong> $address</p>
      <p><strong>Postcode:</strong> $postcode</p>
      <p><strong>Country:</strong> $country</p>
      <p><strong>Contact Number:</strong> $contactNumber</p>
      <p><strong>Email 1:</strong> $email1</p>
      <p><strong>Email 2:</strong> $email2</p>
      <p><strong>Company Name:</strong> $companyName</p>
      <p><strong>Promotion Code:</strong> $promoCode</p>
      <p><strong>Payment Gateway:</strong> $paymentGateway</p>
    ";

    $mail->send();

    echo json_encode(['status' => 'success', 'message' => 'Email sent']);
} 
catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => $mail->ErrorInfo]);
}
