<?php 
require __DIR__.'/vendor/autoload.php';

use Kreait\Firebase\Factory;
use Kreait\Firebase\Contract\Auth;

$factory = (new Factory)
    ->withServiceAccount('firebaseConfig.json')
    ->withDatabaseUri('Database URL');

$database = $factory->createDatabase();

$auth = $factory->createAuth();

?>