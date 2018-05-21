<?php
 $name=$_POST["name"];
 $pwd=$_POST["pwd"];
 $arr=array('name'=>$name,'pwd'=>$pwd);
 echo json_encode($arr);
>
