<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ocean Grace Restaurant</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container {
            text-align: center;
            background: rgba(255, 255, 255, 0.95);
            padding: 60px 40px;
            border-radius: 20px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.3);
            max-width: 800px;
        }
        h1 {
            color: #2c3e50;
            font-size: 3em;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        .subtitle {
            color: #7f8c8d;
            font-size: 1.3em;
            margin-bottom: 40px;
        }
        .nav-buttons {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }
        .nav-btn {
            background: #3498db;
            color: white;
            text-decoration: none;
            padding: 15px 30px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.1em;
            transition: all 0.3s ease;
            display: inline-block;
            box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
        }
        .nav-btn:hover {
            background: #2980b9;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
        }
        .nav-btn.reservation {
            background: #e74c3c;
            box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
        }
        .nav-btn.reservation:hover {
            background: #c0392b;
            box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);
        }
        .nav-btn.admin {
            background: #27ae60;
            box-shadow: 0 4px 15px rgba(39, 174, 96, 0.3);
        }
        .nav-btn.admin:hover {
            background: #229954;
            box-shadow: 0 6px 20px rgba(39, 174, 96, 0.4);
        }
        .feature-list {
            margin: 40px 0;
            text-align: left;
            display: inline-block;
        }
        .feature-list li {
            margin: 10px 0;
            color: #34495e;
            font-size: 1.1em;
        }
        .version-info {
            margin-top: 30px;
            padding: 20px;
            background: #ecf0f1;
            border-radius: 10px;
            color: #7f8c8d;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🌊 Ocean Grace</h1>
        <p class="subtitle">Elegant Seaside Dining Experience</p>
        
        <div class="nav-buttons">
            <a href="reservation.html" class="nav-btn reservation">📝 Make Reservation</a>
            <a href="admin.html" class="nav-btn admin">📊 Admin Panel</a>
            <a href="setup.php" class="nav-btn">⚙️ Database Setup</a>
        </div>
        
        <div class="feature-list">
            <h3>🍽️ Restaurant Features:</h3>
            <ul>
                <li>🏖️ Beautiful seaside location</li>
                <li>👨‍🍳 Chef's exclusive curated menu</li>
                <li>🎵 Live acoustic performances</li>
                <li>🌅 Romantic sunset terrace</li>
                <li>🏡 Private dining gazebos</li>
                <li>💰 Payment made on-site</li>
            </ul>
        </div>
        
        <div class="version-info">
            <strong>🔧 XAMPP Integration</strong><br>
            This version works with XAMPP MySQL database<br>
            Make sure Apache & MySQL services are running
            
            <?php
            // Show current time and connection status
            echo '<br><br>⏰ Server Time: ' . date('Y-m-d H:i:s');
            
            try {
                include 'config.php';
                $pdo->query("SELECT 1");
                echo '<br>✅ Database: Connected to MySQL';
            } catch(Exception $e) {
                echo '<br>❌ Database: Not connected (' . $e->getMessage() . ')';
            }
            ?>
        </div>
    </div>
</body>
</html>
