<?php 
    session_start();

    include('dbcon.php');

    if(isset($_POST['submit'])){
        $email    = $_POST['email'   ];
        $username = $_POST['username'];
        $password = $_POST['password'];

        $userProperties = [
            'email'         => $email,
            'emailVerified' => false,
            'displayName'   => $username,
            'password'      => $password,
        ];

        $createdUser = $auth->createUser($userProperties);

        if($createdUser){
            echo 'User created successfully';
            header("Location: index.html");
        }
        else 
        {
            echo 'User creation failed';
            header("Location: index.php");
        }

    }

    // if(isset($_POST['submit'])){
    //     $username = $_POST['username'];
    //     $password = $_POST['password'];

    //     $query = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    //     $result = mysqli_query($conn, $query);
    //     if(mysqli_num_rows($result) == 1){
    //         $_SESSION['username'] = $username;
    //         header('location: index.php');
    //     }else{
    //         echo 'Username or Password is incorrect';
    //     }
    // }


?>
