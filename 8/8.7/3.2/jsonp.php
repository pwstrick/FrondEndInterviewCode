<?php
$func = $_GET["jsonp"];
$json = [
	'code' => 200,
	'msg' => '操作成功',
	'data' => [
		'prev' => '2016-09',
		'next' => '2016-11',
	]
];
echo $func.'('.json_encode($json).')';
	