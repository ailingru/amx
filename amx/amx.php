<?php
	$hide=$_GET["hide"];
	$conn=mysqli_connect("127.0.0.1","root","","amx",3306);
	mysqli_query($conn,"SET NAMES UTF8");
	if($hide=="0"){
    $sql="SELECT COUNT(*) FROM news";
    $rs=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($rs);
    $num=$row[0]-12;
    $sql="SELECT * FROM news LIMIT $num,4";
    $rs=mysqli_query($conn,$sql);
    $arr=[];
    while(($row=mysqli_fetch_row($rs))!=null){
        array_push($arr,$row);
    }
    echo(JSON_encode($arr));
 }else if($hide==1){
 	$sql="SELECT COUNT(*) FROM news";
    $rs=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($rs);
    $num=$row[0]-8;
    $sql="SELECT * FROM news LIMIT $num,4";
    $rs=mysqli_query($conn,$sql);
    $arr=[];
    while(($row=mysqli_fetch_row($rs))!=null){
        array_push($arr,$row);
    }
    echo(JSON_encode($arr));
 }else if($hide==2){
 	$sql="SELECT COUNT(*) FROM news";
    $rs=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($rs);
    $num=$row[0]-12;
    $sql="SELECT * FROM news LIMIT $num,4";
    $rs=mysqli_query($conn,$sql);
    $arr=[];
    while(($row=mysqli_fetch_row($rs))!=null){
        array_push($arr,$row);
    }
    echo(JSON_encode($arr));
 }else if($hide==3){//艾蜜雪amx2
 	$sql="SELECT COUNT(*) FROM amxproduct";
    $rs=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($rs);
    $num=$row[0]-12;
    $sql="SELECT * FROM amxproduct LIMIT $num,2";
    $rs=mysqli_query($conn,$sql);
    $arr=[];
    while(($row=mysqli_fetch_row($rs))!=null){
        array_push($arr,$row);
    }
    echo(JSON_encode($arr));
 }else if($hide==4){//艾蜜雪amx3
 	$sql="SELECT COUNT(*) FROM amxproduct";
    $rs=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($rs);
    $num=$row[0]-8;
    $sql="SELECT * FROM amxproduct LIMIT $num,2";
    $rs=mysqli_query($conn,$sql);
    $arr=[];
    while(($row=mysqli_fetch_row($rs))!=null){
        array_push($arr,$row);
    }
    echo(JSON_encode($arr));
 }else if($hide==5){//艾蜜雪amx4
 	$sql="SELECT COUNT(*) FROM amxproduct";
    $rs=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($rs);
    $num=$row[0]-12;
    $sql="SELECT * FROM amxproduct LIMIT $num,2";
    $rs=mysqli_query($conn,$sql);
    $arr=[];
    while(($row=mysqli_fetch_row($rs))!=null){
        array_push($arr,$row);
    }
    echo(JSON_encode($arr));
 }else if($hide==6){//艾蜜雪amx4
 	$sql="SELECT COUNT(*) FROM amxproduct";
    $rs=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($rs);
    $num=$row[0]-12;
    $sql="SELECT * FROM amxproduct LIMIT $num,2";
    $rs=mysqli_query($conn,$sql);
    $arr=[];
    while(($row=mysqli_fetch_row($rs))!=null){
        array_push($arr,$row);
    }
    echo(JSON_encode($arr));
 }else if($hide==7){
 	$sql="SELECT COUNT(*) FROM history";
    $rs=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($rs);
    $num=$row[0]-1;
    $sql="SELECT * FROM history LIMIT $num,5";
    $rs=mysqli_query($conn,$sql);
    $arr=[];
    while(($row=mysqli_fetch_row($rs))!=null){
        array_push($arr,$row);
    }
    echo(JSON_encode($arr));
 }else if($hide==8){//设计团队
 	$sql="SELECT COUNT(*) FROM team";
    $rs=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($rs);
    $num=$row[0]-4;
    $sql="SELECT * FROM team LIMIT $num,1";
    $rs=mysqli_query($conn,$sql);
    $arr=[];
    while(($row=mysqli_fetch_row($rs))!=null){
        array_push($arr,$row);
    }
    echo(JSON_encode($arr));
 }else if($hide==9){//设计团队_韩璐璐
 	$sql="SELECT COUNT(*) FROM team";
    $rs=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($rs);
    $num=$row[0]-3;
    $sql="SELECT * FROM team LIMIT $num,1";
    $rs=mysqli_query($conn,$sql);
    $arr=[];
    while(($row=mysqli_fetch_row($rs))!=null){
        array_push($arr,$row);
    }
    echo(JSON_encode($arr));
 }else if($hide==10){//设计团队_周翔宇
 	$sql="SELECT COUNT(*) FROM team";
    $rs=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($rs);
    $num=$row[0]-2;
    $sql="SELECT * FROM team LIMIT $num,1";
    $rs=mysqli_query($conn,$sql);
    $arr=[];
    while(($row=mysqli_fetch_row($rs))!=null){
        array_push($arr,$row);
    }
    echo(JSON_encode($arr));
 }else if($hide==11){//设计团队_周翔宇
 	$sql="SELECT COUNT(*) FROM team";
    $rs=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($rs);
    $num=$row[0]-1;
    $sql="SELECT * FROM team LIMIT $num,1";
    $rs=mysqli_query($conn,$sql);
    $arr=[];
    while(($row=mysqli_fetch_row($rs))!=null){
        array_push($arr,$row);
    }
    echo(JSON_encode($arr));
 }
?>