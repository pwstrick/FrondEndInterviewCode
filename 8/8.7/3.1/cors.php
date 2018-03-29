<?php
header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Origin: http://www.pwstrick.com');
//header('Access-Control-Allow-Credentials: true');
$json = [
	'code' => 200,
	'msg' => '操作成功',
	'data' => [
		'prev' => '2016-09',
		'next' => '2016-11',
	]
];
setcookie('name', 'strick');
echo json_encode($json);
	