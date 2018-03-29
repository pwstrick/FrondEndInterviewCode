function palindrome(str) {
    if (str.length <= 1) return true;
    //首字符和末字符做匹配
    if (str[0] != str[str.length - 1]) return false;
    //将去除首尾字符的字符串传入函数自身中
    return palindrome(str.substr(1, str.length - 2));
}

console.log(palindrome("aabaa"));
console.log(palindrome("aabcc"));