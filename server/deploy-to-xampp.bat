@echo off
title Ocean Grace - XAMPP Setup
color 0A
echo.
echo ===============================================
echo    OCEAN GRACE - XAMPP DEPLOYMENT
echo ===============================================
echo.

REM Check if XAMPP is installed
if not exist "C:\xampp\htdocs" (
    echo ❌ XAMPP not found in C:\xampp\
    echo Please install XAMPP first from https://www.apachefriends.org/
    pause
    exit /b 1
)

echo ✅ XAMPP found!

REM Create project directory in htdocs
set "DEST_DIR=C:\xampp\htdocs\ocean-grace"
if not exist "%DEST_DIR%" (
    mkdir "%DEST_DIR%"
    echo ✅ Created directory: %DEST_DIR%
) else (
    echo ✅ Directory already exists: %DEST_DIR%
)

echo.
echo 📁 Copying files to XAMPP...

REM Copy PHP files
copy "index.php" "%DEST_DIR%\" >nul
copy "setup.php" "%DEST_DIR%\" >nul
copy "config.php" "%DEST_DIR%\" >nul
copy "api_simple.php" "%DEST_DIR%\" >nul

REM Copy HTML files
copy "reservation.html" "%DEST_DIR%\" >nul
copy "admin.html" "%DEST_DIR%\" >nul

REM Copy other files
copy ".htaccess" "%DEST_DIR%\" >nul
copy "pexels-sebastian-189349.jpg" "%DEST_DIR%\" >nul

echo ✅ Files copied successfully!
echo.

REM Check XAMPP services
echo 🔍 Checking XAMPP services...
tasklist /FI "IMAGENAME eq httpd.exe" 2>NUL | find /I /N "httpd.exe">NUL
if "%ERRORLEVEL%"=="0" (
    echo ✅ Apache is running
) else (
    echo ⚠️  Apache is not running
    echo Please start Apache in XAMPP Control Panel
)

tasklist /FI "IMAGENAME eq mysqld.exe" 2>NUL | find /I /N "mysqld.exe">NUL
if "%ERRORLEVEL%"=="0" (
    echo ✅ MySQL is running
) else (
    echo ⚠️  MySQL is not running
    echo Please start MySQL in XAMPP Control Panel
)

echo.
echo ===============================================
echo           🎉 SETUP COMPLETE!
echo ===============================================
echo.
echo 📍 Project Location: %DEST_DIR%
echo.
echo 🌐 Access URLs:
echo    • Homepage    : http://localhost/ocean-grace/
echo    • Setup DB    : http://localhost/ocean-grace/setup.php
echo    • Reservasi   : http://localhost/ocean-grace/reservation.html
echo    • Admin       : http://localhost/ocean-grace/admin.html
echo    • phpMyAdmin  : http://localhost/phpmyadmin/
echo.
echo 📋 Next Steps:
echo    1. Open XAMPP Control Panel
echo    2. Start Apache and MySQL services
echo    3. Open: http://localhost/ocean-grace/setup.php
echo    4. Test the reservation system
echo.

set /p "OPEN_BROWSER=Open browser now? (y/n): "
if /i "%OPEN_BROWSER%"=="y" (
    start http://localhost/ocean-grace/
    start http://localhost/phpmyadmin/
)

echo.
echo 🚀 Ocean Grace is ready with XAMPP!
pause
