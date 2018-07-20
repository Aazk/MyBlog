<?php
$servername = "122.152.234.143";
$username = "root";
$password = "786452as";
$dbname = "testdb";

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}
$conn->query('set names utf8');
$sql = "SELECT * FROM linuxtest";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      echo "学号: " . $row["userid"]. "<br>";
      echo "数据库版本号: " . $row["mysql_version"]."<br>";
      echo "linux系统版本号: " . $row["linux_version"]."<br>";
      echo "rth0网卡物理地址: " . $row["eth0_HW"]."<br>";
    }
} else {
    echo "0 结果";
}
$conn->close();
?>
