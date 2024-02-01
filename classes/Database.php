<?php

declare(strict_types=1);


class Database
{
    private $user = "root";
    private $password = "";
    private $db = "Tracking";
    private $host = "localhost";

    public function connect()
    {
        $connection = mysqli_connect($this->host, $this->user, $this->password, $this->db);
        return $connection;
    }
}
