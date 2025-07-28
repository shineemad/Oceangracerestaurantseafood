<?php
// Simple and robust API for reservations
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

// Handle OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Database connection
$host = 'localhost';
$dbname = 'ocean_grace_reservations';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Create database if not exists
    $pdo->exec("CREATE DATABASE IF NOT EXISTS $dbname");
    $pdo->exec("USE $dbname");
    
    // Create table if not exists
    $pdo->exec("CREATE TABLE IF NOT EXISTS reservations (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nama VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        telepon VARCHAR(50) NOT NULL,
        tanggal DATE NOT NULL,
        waktu VARCHAR(10) NOT NULL,
        jumlah INT NOT NULL,
        area VARCHAR(100) NOT NULL,
        chef_menu TINYINT(1) DEFAULT 0,
        live_performance TINYINT(1) DEFAULT 0,
        sunset_terrace TINYINT(1) DEFAULT 0,
        private_gazebo TINYINT(1) DEFAULT 0,
        catatan TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )");
    
} catch(PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Database connection failed: ' . $e->getMessage()
    ]);
    exit;
}

// Handle GET request (for admin to fetch data)
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        $stmt = $pdo->query("SELECT * FROM reservations ORDER BY created_at DESC");
        $reservations = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'success' => true,
            'data' => $reservations,
            'count' => count($reservations)
        ]);
        exit;
        
    } catch(PDOException $e) {
        echo json_encode([
            'success' => false,
            'message' => 'Failed to fetch reservations: ' . $e->getMessage()
        ]);
        exit;
    }
}

// Handle POST request (for creating reservations)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        // Get POST data
        $raw_input = file_get_contents('php://input');
        $input = json_decode($raw_input, true);
        
        // Fallback to $_POST if JSON decode fails
        if (!$input && !empty($_POST)) {
            $input = $_POST;
        }
        
        if (!$input) {
            echo json_encode([
                'success' => false,
                'message' => 'No data received. Raw input: ' . substr($raw_input, 0, 100)
            ]);
            exit;
        }
        
        // Validate required fields
        $required = ['nama', 'email', 'telepon', 'tanggal', 'waktu', 'jumlah', 'area'];
        $missing = [];
        
        foreach ($required as $field) {
            if (empty($input[$field])) {
                $missing[] = $field;
            }
        }
        
        if (!empty($missing)) {
            echo json_encode([
                'success' => false,
                'message' => 'Missing required fields: ' . implode(', ', $missing)
            ]);
            exit;
        }
        
        // Insert into database
        $sql = "INSERT INTO reservations (nama, email, telepon, tanggal, waktu, jumlah, area, chef_menu, live_performance, sunset_terrace, private_gazebo, catatan) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
        $stmt = $pdo->prepare($sql);
        $result = $stmt->execute([
            $input['nama'],
            $input['email'],
            $input['telepon'],
            $input['tanggal'],
            $input['waktu'],
            (int)$input['jumlah'],
            $input['area'],
            isset($input['chef_menu']) ? (int)$input['chef_menu'] : 0,
            isset($input['live_performance']) ? (int)$input['live_performance'] : 0,
            isset($input['sunset_terrace']) ? (int)$input['sunset_terrace'] : 0,
            isset($input['private_gazebo']) ? (int)$input['private_gazebo'] : 0,
            $input['catatan'] ?? ''
        ]);
        
        if ($result) {
            $id = $pdo->lastInsertId();
            echo json_encode([
                'success' => true,
                'message' => 'Reservasi berhasil disimpan!',
                'id' => $id
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Failed to insert reservation'
            ]);
        }
        
    } catch(PDOException $e) {
        echo json_encode([
            'success' => false,
            'message' => 'Database error: ' . $e->getMessage()
        ]);
    } catch(Exception $e) {
        echo json_encode([
            'success' => false,
            'message' => 'Server error: ' . $e->getMessage()
        ]);
    }
    exit;
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed: ' . $_SERVER['REQUEST_METHOD']
    ]);
}
?>
