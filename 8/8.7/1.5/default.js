var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
  // if (xhr.readyState == 4) {
    // if (xhr.status == 200) {
      // xhr.statusText;
      // xhr.responseText;
      // xhr.getResponseHeader("Content-Length");
      // xhr.getAllResponseHeaders();
    // }
  // }
// };
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      xhr.statusText; //"OK"
      /**
       * '{"code":200,"msg":"\u64cd\u4f5c\u6210\u529f","data":{"prev":"2016-09","next":"2016-11"}}'
       */
      xhr.responseText;
      xhr.getResponseHeader("Content-Length"); //"88"
      xhr.getResponseHeader("Access-Control-Allow-Origin"); //null
      xhr.getResponseHeader("Set-Cookie"); //null
      /**
       * date: Wed, 10 Jan 2018 02:06:10 GMT
       * server: Apache/2.4.10 (Win64) PHP/5.5.17
       * connection: Keep-Alive
       * x-powered-by: PHP/5.5.17
       * content-length: 88
       * keep-alive: timeout=5, max=98
       * content-type: text/html
       */
      xhr.getAllResponseHeaders();
    }
  }
};
xhr.open("post", "server.php");
xhr.send(null);