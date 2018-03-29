<?php
/**
 * Upload.php
 *
 * 文件上传处理类
 *
 * This source file is subject to the new BSD license that is bundled
 * with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://momoger.com/license
 *
 * @category	App
 * @package 	App_Util
 * @author 		Guya
 * @version    	1.0
 * @copyright  	Copyright © 2009 www.momoger.com All Rights Reserved.
 * @license    	http://momoger.com/license     New BSD License
 */

/**
 * 文件上传处理类
 *
 * @category	App
 * @package 	App_Util
 * @copyright  	Copyright © 2009 www.momoger.com All Rights Reserved.
 * @license    	http://momoger.com/license     New BSD License
 */
class App_Util_Upload {

    /**
     * HTTP 表单文件的临时文件值.
     *
     * @var string
     */
    private $tmpFile = NULL;

    /**
     * 上传文件的信息.
     *
     * @var array
     */
    private $theFile = array();

    /**
     * 文件上传大小限制允许的最大值.
     *
     * @var int
     */
    private $maxFileSize = 0;

    /**
     * 运行上传的文件类型. 以后缀名为准.
     *
     * @var mixed
     */
    private $allowTypes = NULL;

    /**
     * 文件上传错误信息.
     *
     * @var string
     */
    private $error = '';

    /**
     * 文件上传错误的错误信息定制数组.
     *
     * @var array
     */
    private $errors = array();

    /**
     * 构造函数. 初始化类信息.
     *
     * @param string $inputName 文件通过HTTP上传HTML表单文件上传控件名.
     * @param int $maxSize 允许上传的最大值.
     * @param mixed $allowType 运行上传的文件类型. 以后缀名为准.
     */
    public function __construct($inputName='upfile',$maxSize=0,$allowType='*') {

        //设置文件上传的最大值. 不设置默认为服务器配置信息.
        $this->setMaxFileSize($maxSize);

        //设置允许上传的文件类型, '*' 或 null 表示不限制.
        $this->setAllowTypes($allowType);

        //上传反馈信息设置.
        $this->errors = array(
            'NO_ERR' => '文件上传成功!',
            'NO_FILE_UPLOAD' => '未接收到上传文件, 文件可能过大了!',
            'MOVE_UPLOAD_FILE_FALSE' => '文件移动失败!',
            'NOT_ALLOW_TYPE'	=>	'不允许的文件类型!',
            'FILE_SIZE_BIG'	=>	'文件尺寸太大了!',
            //'FILE_NO_EXT_NAME' => '文件没有后缀名!',
            'CREATE_DIR_ERR'	=>	'创建文件保存目录失败!',
            'UPLOAD_ERR_INI_SIZE' => '文件尺寸超过系统允许的最大值!',
            'UPLOAD_ERR_FORM_SIZE'	=>	'文件尺寸超过表单规定的值!',
            'UPLOAD_ERR_PARTIAL' => '文件上传不完整!',
            'UPLOAD_ERR_NO_FILE' => '没有被选定的文件上传! ',
            'UPLOAD_ERR_NO_TMP_DIR' => '上次文件不能够保存到临时目录!',
            'NOT_HTTP_POST' => '文件非post上传!',
            'UPLOAD_ERR_CANT_WRITE' => '文件上传到临时目录不允许保存文件!'
        );

        //接收通过HTTP上传到服务器的文件.
        if (array_key_exists($inputName, $_FILES)) {
            $this->tmpFile = @$_FILES[$inputName];

            //获取上传文件的信息
            $this->getUploadFileInfo();
        } else {
            $this->error = $this->errors['NO_FILE_UPLOAD'];
        }
    }

    /**
     * 自定义上传错误提示信息.
     *
     * @param mixed $key 设置错误标志. 或关联数组.
     * @param string $value 提示信息值.
     * @return Upload
     */
    public function setErrorMsg($key=null, $value='') {
        if (is_array($key)) {
            foreach ($key as $k=>$v){
                if (array_key_exists($k,$this->errors)) {
                    $this->errors[$k] = $v;
                }
            }
        }
        else {
            if (array_key_exists($key,$this->errors)) {
                $this->errors[$key] = $value;
            }
        }
        return $this;
    }

    /**
     * 设置HTTP上传HTML表单文件上传控件名.
     *
     * @param string $inputName HTML表单文件上传控件名
     * @return Upload
     */
    public function setInputName($inputName='upfile') {
        $this->tmpFile = $_FILES[$inputName];
        return $this;
    }

    /**
     * 设置文件上传的最大尺寸.
     *
     * @param int $size 文件大小值.
     * @return Upload
     */
    public function setMaxFileSize($size=0) {
        $size = (int)$size;
        if ($size) {
            $this->maxFileSize = $size;
        } else {
            $this->maxFileSize = $this->getUploadIniSize();
        }
        return $this;
    }

    /**
     * 设置允许上传的文件类型. 支持三种模式定义.
     * 1: $types == '*' 或者 $types == NULL
     * 表示允许所有类型. 不限制上传文件类型.
     *
     * 2: $types == 'jpg' | 'zip' 此类型的一个字符串.
     * 表示只接受指定后缀名定义的一种文件类型. 其他的都不接收.
     *
     * 3: $types == array('jpg','zip','doc','pdf') 此类模式.
     * 表示能接受数组里定义的若干种后缀名的文件.
     *
     * @param mixed $types 允许上传的文件类型值
     * @return Upload
     */
    public function setAllowTypes($types='*') {
        $this->allowTypes = $types;
        return $this;
    }

    /**
     * 获取文件上传的错误信息.
     *
     * @return string
     */
    public function getErrorMsg() {
        return $this->error;
    }

    /**
     * 获取文件名的后缀名, 强制小写模式返回.
     *
     * @param string $fileName 文件名.
     * @return string
     */
    public function getExtName($fileName=null) {
        if (!$fileName) {
            $fileName = @$this->tmpFile['name'];
        }
        $rs = explode(".",$fileName);
        return strtolower($rs[count($rs)-1]);
    }

    /**
     * 检查上传文件是否是有效的上传.
     *
     * @return bool
     */
    public function isValid() {
        if (!empty($this->error)) {
            return false;
        }
        $status = true;
        switch ($this->tmpFile['error']) {
            case UPLOAD_ERR_OK :
                break;
            case UPLOAD_ERR_INI_SIZE :
                $this->error = $this->errors['UPLOAD_ERR_INI_SIZE'];
                $status = false; break;
            case UPLOAD_ERR_FORM_SIZE :
                $this->error = $this->errors['UPLOAD_ERR_FORM_SIZE'];
                $status = false; break;
            case UPLOAD_ERR_PARTIAL :
                $this->error = $this->errors['UPLOAD_ERR_PARTIAL'];
                $status = false; break;
            case UPLOAD_ERR_NO_FILE :
                $this->error = $this->errors['UPLOAD_ERR_NO_FILE'];
                $status = false; break;
            case UPLOAD_ERR_NO_TMP_DIR :
                $this->error = $this->errors['UPLOAD_ERR_NO_TMP_DIR'];
                $status = false; break;
            case UPLOAD_ERR_CANT_WRITE :
                $this->error = $this->errors['UPLOAD_ERR_CANT_WRITE'];
                $status = false; break;
            default:
                break;
        }
        if ($status) {
            $status = $this->isAllowType();
        }
        if ($status) {
            $status = $this->isAllowSize();
        }
		if ($status) {
			$status = $this->isHttpPost();
		}
        return $status;
    }

    /**
     * 数字化文件名, 如果文件名为标准英文和数字名. 原则上不改动. 如又指定的名传入, 以指定的名为准.
     *
     * @param string $fileName 参照的文件名.
     * @param string $newName 指定的文件名.
     * @param boolean $addYM 是否添加年月信息.
     * @param string $separate 各名之间分割线.
     * @return string
     */
    public function getNewName($fileName = null, $newName = null, $addYM = FALSE, $separate = '_'){
        if (!$fileName) {
            $fileName = $this->tmpFile['name'];
        }

        $rs = explode(".",$fileName);
        if (count($rs)<2) {
            return FALSE;
        }

        $ext = strtolower($rs[count($rs)-1]);
        unset($rs[count($rs)-1]);

        $prefix = NULL;
        if($addYM) {
            $prefix = date('Ym').$separate;
        }

        if ($newName) {
            return $prefix.$newName.'.'.$ext;
        } else {
            $alnum = true;
            foreach ($rs as $v) {
                if (!eregi('^[_a-zA-Z0-9\-]+$',$v)) {
                    $alnum = false;
                    break;
                }
            }
            if ($alnum) {
                return $prefix.implode('.',$rs).$separate.rand(1000,9999).'.'.$ext;
            }
            else {
                return $prefix.time().$separate.rand(1000,9999).'.'.$ext;
            }
        }
    }

    /**
     * 获取上传的文件信息.
     *
     * @return array
     */
    public function getUploadFileInfo() {

        $this->theFile['name'] = @$this->tmpFile['name'];
        $this->theFile['size'] = @$this->tmpFile['size'];
        $this->theFile['suffix'] = $this->getExtName();
        $this->theFile['rename'] = @$this->tmpFile['name'];
        $this->theFile['path'] = '.';
        $this->theFile['local'] = @$this->tmpFile['name'];

        return $this->theFile;
    }


    /**
     * 保存上传的文件信息.
     *
     * @param string $dest 文件保存路径
     * @param boolean $safe 安全上传
     * @return boolean
     */
    public function save($dest, $safe=true) {
        $path = dirname($dest);
        $this->theFile['rename'] = basename($dest);
        $this->theFile['path'] = $path;
        $this->theFile['local'] = $dest;
        
        if (!is_dir($path)) {
            if (!@mkdir($path, 0755, TRUE)) {
                $this->error = $this->errors['CREATE_DIR_ERR'];
                return FALSE;
            }
        }
        
        if ($safe) {
            $status = $this->isValid();
            
            if ($status) {
                if (@move_uploaded_file($this->tmpFile['tmp_name'],$dest)) {
                    return TRUE;
                } else {
                    $this->error = $this->errors['MOVE_UPLOAD_FILE_FALSE'];
                    return FALSE;
                }
            } else {
                return FALSE;
            }
        } else {
            return @move_uploaded_file($this->tmpFile['tmp_name'],$dest);
        }
    }

    /**
     * 获取PHP服务器信息php.ini文件配置允许上传的最大值.
     *
     * @return int
     */
    public function getUploadIniSize(){
        $sSize = ini_get("upload_max_filesize");
        $sUnit = substr($sSize, -1);
        $iSize = (int) substr($sSize, 0, -1);
        switch (strtoupper($sUnit)){
            case 'Y' : $iSize *= 1024; // Yotta
            case 'Z' : $iSize *= 1024; // Zetta
            case 'E' : $iSize *= 1024; // Exa
            case 'P' : $iSize *= 1024; // Peta
            case 'T' : $iSize *= 1024; // Tera
            case 'G' : $iSize *= 1024; // Giga
            case 'M' : $iSize *= 1024; // Mega
            case 'K' : $iSize *= 1024; // kilo
        };
        return $iSize;
    }

    /**
     * 检查文件是否是允许的上传类型.
     *
     * @return bool
     */
    protected function isAllowType() {
        if ('*' == $this->allowTypes || is_null($this->allowTypes)) {
            return TRUE;
        }else {
            if (is_array($this->allowTypes)) {
                if (in_array(@$this->theFile['suffix'], $this->allowTypes)) {
                    return TRUE;
                } else {
                    $this->error = $this->errors['NOT_ALLOW_TYPE'];
                    return FALSE;
                }
            } else if (is_string($this->allowTypes) && $this->allowTypes == @$this->theFile['suffix']) {
                return TRUE;
            }
            else {
                $this->error = $this->errors['NOT_ALLOW_TYPE'];
                return FALSE;
            }
        }
    }

    /**
     * 检查上传文件大小是否在允许的范围内.
     *
     * @return bool
     */
    protected function isAllowSize() {
        if ($this->tmpFile['size'] <= $this->maxFileSize) {
            return true;
        }
        else {
            $this->error = $this->errors['FILE_SIZE_BIG'];
            return false;
        }
    }
	
    /**
     * 指定的文件是否是通过 HTTP POST 上传的.
     *
     * @return bool
     */
	protected function isHttpPost(){
		if(is_uploaded_file($this->tmpFile['tmp_name'])){
			return true;
		}else{
			$this->error = $this->errors['NOT_HTTP_POST'];
			return false;
		}
	}
}
