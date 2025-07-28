<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Setup Database - Ocean Grace</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
        }
        .setup-container {
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            max-width: 600px;
            text-align: center;
        }
        h1 {
            color: #333;
            margin-bottom: 30px;
        }
        .status {
            padding: 15px;
            margin: 15px 0;
            border-radius: 8px;
            font-weight: bold;
        }
        .success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .error {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        .info {
            background: #d1ecf1;
            color: #0c5460;
            border: 1px solid #bee5eb;
        }
        .btn {
            background: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            margin: 10px;
        }
        .btn:hover {
            background: #0056b3;
        }
    </style>
</head>
<body>
    <div class="setup-container">
        <h1>🌊 Ocean Grace Database Setup</h1>
        
        <?php
        include 'config.php';
        
        try {
            // Test connection
            $pdo->query("SELECT 1");
            echo '<div class="status success">✅ Database connection successful!</div>';
            
            // Check if table exists
            $result = $pdo->query("SHOW TABLES LIKE 'reservations'");
            if ($result->rowCount() > 0) {
                echo '<div class="status success">✅ Table "reservations" already exists</div>';
                
                // Count records
                $count = $pdo->query("SELECT COUNT(*) FROM reservations")->fetchColumn();
                echo '<div class="status info">📊 Current reservations count: ' . $count . '</div>';
            } else {
                echo '<div class="status error">⚠️ Table "reservations" does not exist</div>';
            }
            
            echo '<div class="status info">🗄️ Database: ' . $dbname . '</div>';
            echo '<div class="status info">🖥️ Host: ' . $host . '</div>';
            
        } catch(PDOException $e) {
            echo '<div class="status error">❌ Connection failed: ' . $e->getMessage() . '</div>';
            echo '<div class="status info">💡 Make sure XAMPP MySQL is running</div>';
        }
        ?>
        
        <div style="margin-top: 30px;">
            <a href="reservation.html" class="btn">📝 Form Reservasi</a>
            <a href="admin.html" class="btn">📊 Admin Panel</a>
            <a href="http://localhost/phpmyadmin" class="btn" target="_blank">🗄️ phpMyAdmin</a>
        </div>
        
        <div style="margin-top: 20px; font-size: 14px; color: #666;">
            <strong>Setup Instructions:</strong><br>
            1. Start XAMPP Control Panel<br>
            2. Start Apache & MySQL services<br>
            3. Access this page through http://localhost/your-project-folder/<br>
            4. Database will be created automatically
        </div>
    </div>
</body>
</html>
