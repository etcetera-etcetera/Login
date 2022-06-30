<?php 
    session_start();

    include('dbcon.php');

    // $database 

    $reference = $database->getReference('contacts');
    echo $reference->getValue(); // contacts



?>



<h1>Login Connection</h1>

<h3>Register</h3>
<form action="code.php" method="post">
    <input type="email" name="email" placeholder="E-mail">
    <input type="text" name="username" placeholder="Username">
    <input type="password" name="password" placeholder="Password">
    <input type="submit" name="submit" value="Register">
</form>

<h3>Login</h3>
<form action="code.php" method="POST">
    <input type="text" name="username" placeholder="Username">
    <input type="password" name="password" placeholder="Password">
    <input type="submit" name="submit" value="Login">
</form>