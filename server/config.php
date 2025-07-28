<?php
// Database configuration for XAMPP MySQL
$host = 'localhost';
$dbname = 'ocean_grace_reservations';
$username = 'root';
$password = '';


try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Create database if not exists
    $sql = "CREATE DATABASE IF NOT EXISTS $dbname";
    $pdo->exec($sql);
    
    // Select database
    $pdo->exec("USE $dbname");
    
    // Create table if not exists
    $sql = "CREATE TABLE IF NOT EXISTS reservations (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nama VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        telepon VARCHAR(50) NOT NULL,
        tanggal DATE NOT NULL,
        waktu TIME NOT NULL,
        jumlah INT NOT NULL,
        area VARCHAR(100) NOT NULL,
        chef_menu BOOLEAN DEFAULT 0,
        live_performance BOOLEAN DEFAULT 0,
        sunset_terrace BOOLEAN DEFAULT 0,
        private_gazebo BOOLEAN DEFAULT 0,
        catatan TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    
    $pdo->exec($sql);
    
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
