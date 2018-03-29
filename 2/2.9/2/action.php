<?php
require_once('upload.php');
header("Content-Type:text/html;charset=utf-8");
$type = array('jpg', 'jpeg', 'png', 'gif');
$path = sprintf('%s/%s/%s/', date('Y'), date('m'), date('d'));

$upload = new App_Util_Upload('attach', 0, $type);
//获取上传信息
$info = $upload->getUploadFileInfo();
$fileName = time() . rand(1000, 9999) . '.' . $info['suffix'];
$fullName = $path . $fileName;	
$path = rtrim('upload', DIRECTORY_SEPARATOR) . '/' . $fullName;
$success = $upload->save($path);
$msg = $success ? '上传成功<br/>' : '上传失败<br/>';
echo $msg;
echo '<img src="'.$path.'" />';