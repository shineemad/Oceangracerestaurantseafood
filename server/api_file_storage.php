<?php
// Simple file-based storage untuk testing
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

// Handle OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$dataFile = 'reservations_data.json';

// Handle GET request (for admin to fetch data)
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($dataFile)) {
        $jsonData = file_get_contents($dataFile);
        $reservations = json_decode($jsonData, true) ?: [];
    } else {
        $reservations = [];
    }
    
    echo json_encode([
        'success' => true,
        'data' => $reservations,
        'count' => count($reservations)
    ]);
    exit;
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
                'message' => 'No data received'
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
        
        // Load existing data
        if (file_exists($dataFile)) {
            $jsonData = file_get_contents($dataFile);
            $reservations = json_decode($jsonData, true) ?: [];
        } else {
            $reservations = [];
        }
        
        // Generate ID
        $nextId = count($reservations) + 1;
        
        // Create new reservation record
        $newReservation = [
            'id' => $nextId,
            'nama' => $input['nama'],
            'email' => $input['email'],
            'telepon' => $input['telepon'],
            'tanggal' => $input['tanggal'],
            'waktu' => $input['waktu'],
            'jumlah' => (int)$input['jumlah'],
            'area' => $input['area'],
            'chef_menu' => isset($input['chef_menu']) ? (int)$input['chef_menu'] : 0,
            'live_performance' => isset($input['live_performance']) ? (int)$input['live_performance'] : 0,
            'sunset_terrace' => isset($input['sunset_terrace']) ? (int)$input['sunset_terrace'] : 0,
            'private_gazebo' => isset($input['private_gazebo']) ? (int)$input['private_gazebo'] : 0,
            'catatan' => $input['catatan'] ?? '',
            'created_at' => date('Y-m-d H:i:s')
        ];
        
        // Add to array
        $reservations[] = $newReservation;
        
        // Save to file
        $result = file_put_contents($dataFile, json_encode($reservations, JSON_PRETTY_PRINT));
        
        if ($result !== false) {
            echo json_encode([
                'success' => true,
                'message' => 'Reservasi berhasil disimpan!',
                'id' => $nextId
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Failed to save reservation'
            ]);
        }
        
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
