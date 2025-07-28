@echo off
title Start XAMPP Services
color 0A
echo.
echo ===============================================
echo      STARTING XAMPP SERVICES
echo ===============================================
echo.

REM Check if XAMPP exists
if not exist "C:\xampp\xampp-control.exe" (
    echo ❌ XAMPP not found!
    echo Please install XAMPP first.
    pause
    exit /b 1
)

echo 🚀 Starting Apache...
if exist "C:\xampp\apache_start.bat" (
    start /min "" "C:\xampp\apache_start.bat"
    timeout /t 3 >nul
) else (
    echo ⚠️ Apache start script not found
)

echo 🗄️ Starting MySQL...
if exist "C:\xampp\mysql_start.bat" (
    start /min "" "C:\xampp\mysql_start.bat"
    timeout /t 3 >nul
) else (
    echo ⚠️ MySQL start script not found
)

echo.
echo ⏳ Waiting for services to start...
timeout /t 5 >nul

echo.
echo 🔍 Checking service status...

REM Check Apache
tasklist /FI "IMAGENAME eq httpd.exe" 2>NUL | find /I /N "httpd.exe">NUL
if "%ERRORLEVEL%"=="0" (
    echo ✅ Apache is running
) else (
    echo ❌ Apache failed to start
    echo 💡 Try opening XAMPP Control Panel manually
)

REM Check MySQL
tasklist /FI "IMAGENAME eq mysqld.exe" 2>NUL | find /I /N "mysqld.exe">NUL
if "%ERRORLEVEL%"=="0" (
    echo ✅ MySQL is running
) else (
    echo ❌ MySQL failed to start
    echo 💡 Try opening XAMPP Control Panel manually
)

echo.
echo 🎮 Opening XAMPP Control Panel...
start "" "C:\xampp\xampp-control.exe"

echo.
echo ===============================================
echo  XAMPP SERVICES STARTUP COMPLETE
echo ===============================================
echo.
echo 🌐 Test URLs:
echo    • Apache Test: http://localhost/
echo    • phpMyAdmin:  http://localhost/phpmyadmin/
echo    • Ocean Grace: http://localhost/ocean-grace/
echo.
pause
