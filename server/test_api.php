<?php
// Test script untuk memastikan API bekerja dengan benar
header('Content-Type: application/json; charset=utf-8');

echo "<h2>Ocean Grace API Test</h2>";

// Test database connection
try {
    $pdo = new PDO("mysql:host=localhost;dbname=ocean_grace_reservations;charset=utf8", 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "<p style='color: green;'>✅ Database connection: SUCCESS</p>";
    
    // Check if table exists
    $stmt = $pdo->query("SHOW TABLES LIKE 'reservations'");
    if ($stmt->rowCount() > 0) {
        echo "<p style='color: green;'>✅ Table 'reservations' exists</p>";
        
        // Count existing records
        $stmt = $pdo->query("SELECT COUNT(*) as count FROM reservations");
        $count = $stmt->fetch()['count'];
        echo "<p style='color: blue;'>📊 Current records in database: $count</p>";
        
        // Show recent records
        if ($count > 0) {
            echo "<h3>Recent reservations:</h3>";
            $stmt = $pdo->query("SELECT * FROM reservations ORDER BY created_at DESC LIMIT 5");
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                echo "<p>ID: {$row['id']}, Name: {$row['nama']}, Date: {$row['tanggal']}, Created: {$row['created_at']}</p>";
            }
        }
    } else {
        echo "<p style='color: orange;'>⚠️ Table 'reservations' does not exist</p>";
    }
    
} catch(PDOException $e) {
    echo "<p style='color: red;'>❌ Database connection failed: " . $e->getMessage() . "</p>";
}

// Test API endpoint
echo "<h3>Testing API endpoints:</h3>";

// Test GET
$get_url = 'http://localhost/ocean-grace/api_simple.php';
$get_response = @file_get_contents($get_url);
if ($get_response !== false) {
    $get_data = json_decode($get_response, true);
    if ($get_data && isset($get_data['success'])) {
        echo "<p style='color: green;'>✅ GET endpoint working</p>";
        echo "<p>Response: " . substr($get_response, 0, 200) . "...</p>";
    } else {
        echo "<p style='color: orange;'>⚠️ GET endpoint returned unexpected response</p>";
        echo "<p>Response: " . htmlspecialchars($get_response) . "</p>";
    }
} else {
    echo "<p style='color: red;'>❌ GET endpoint failed</p>";
}

// Test POST with sample data
$post_data = [
    'nama' => 'Test User',
    'email' => 'test@example.com',
    'telepon' => '08123456789',
    'tanggal' => date('Y-m-d'),
    'waktu' => '19:00',
    'jumlah' => 2,
    'area' => 'Terrace',
    'chef_menu' => 0,
    'live_performance' => 0,
    'sunset_terrace' => 1,
    'private_gazebo' => 0,
    'catatan' => 'Test reservation from API test'
];

$post_context = stream_context_create([
    'http' => [
        'method' => 'POST',
        'header' => 'Content-Type: application/json',
        'content' => json_encode($post_data)
    ]
]);

$post_response = @file_get_contents($get_url, false, $post_context);
if ($post_response !== false) {
    $post_result = json_decode($post_response, true);
    if ($post_result && isset($post_result['success'])) {
        if ($post_result['success']) {
            echo "<p style='color: green;'>✅ POST endpoint working - Test reservation created</p>";
            echo "<p>Response: " . htmlspecialchars($post_response) . "</p>";
        } else {
            echo "<p style='color: orange;'>⚠️ POST endpoint responded but failed</p>";
            echo "<p>Response: " . htmlspecialchars($post_response) . "</p>";
        }
    } else {
        echo "<p style='color: orange;'>⚠️ POST endpoint returned unexpected response</p>";
        echo "<p>Response: " . htmlspecialchars($post_response) . "</p>";
    }
} else {
    echo "<p style='color: red;'>❌ POST endpoint failed</p>";
}

echo "<hr>";
echo "<p><strong>Troubleshooting tips:</strong></p>";
echo "<ul>";
echo "<li>Make sure XAMPP MySQL service is running</li>";
echo "<li>Check if the database 'ocean_grace_reservations' exists</li>";
echo "<li>Verify the API URL in your form points to the correct location</li>";
echo "<li>Check browser console for JavaScript errors</li>";
echo "<li>Look at XAMPP error logs for PHP errors</li>";
echo "</ul>";
?>
