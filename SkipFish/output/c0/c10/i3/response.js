var res = {'data':'HTTP/1.1 400 Bad Request\x0aX-Content-Type-Options: nosniff\x0aContent-Type: text/html; charset=utf-8\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aDate: Tue, 24 Sep 2024 13:54:11 GMT\x0aConnection: keep-alive\x0aKeep-Alive: timeout=5\x0aTransfer-Encoding: chunked\x0a\x0a\x3chtml\x3e\x0a  \x3chead\x3e\x0a    \x3cmeta charset=\x27utf-8\x27\x3e \x0a    \x3ctitle\x3eURIError: Failed to decode param &#39;/f%E0%2F%C00V.iconName/&#39;\x3c/title\x3e\x0a    \x3cstyle\x3e* {\x0a  margin: 0;\x0a  padding: 0;\x0a  outline: 0;\x0a}\x0a\x0abody {\x0a  padding: 80px 100px;\x0a  font: 13px \x22Helvetica Neue\x22, \x22Lucida Grande\x22, \x22Arial\x22;\x0a  background: #ECE9E9 -webkit-gradient(linear, 0% 0%, 0% 100%, from(#fff), to(#ECE9E9));\x0a  background: #ECE9E9 -moz-linear-gradient(top, #fff, #ECE9E9);\x0a  background-repeat: no-repeat;\x0a  color: #555;\x0a  -webkit-font-smoothing: antialiased;\x0a}\x0ah1, h2 {\x0a  font-size: 22px;\x0a  color: #343434;\x0a}\x0ah1 em, h2 em {\x0a  padding: 0 5px;\x0a  font-weight: normal;\x0a}\x0ah1 {\x0a  font-size: 60px;\x0a}\x0ah2 {\x0a  margin-top: 10px;\x0a}\x0aul li {\x0a  list-style: none;\x0a}\x0a#stacktrace {\x0a  margin-left: 60px;\x0a}\x0a\x3c/style\x3e\x0a  \x3c/head\x3e\x0a  \x3cbody\x3e\x0a    \x3cdiv id=\x22wrapper\x22\x3e\x0a      \x3ch1\x3eOWASP Juice Shop (Express ^4.17.1)\x3c/h1\x3e\x0a      \x3ch2\x3e\x3cem\x3e400\x3c/em\x3e URIError: Failed to decode param &#39;/f%E0%2F%C00V.iconName/&#39;\x3c/h2\x3e\x0a      \x3cul id=\x22stacktrace\x22\x3e\x3cli\x3e &nbsp; &nbsp;at decodeURIComponent (&lt;anonymous&gt;)\x3c/li\x3e\x3cli\x3e &nbsp; &nbsp;at decode_param (/juice-shop/node_modules/express/lib/router/layer.js:172:12)\x3c/li\x3e\x3cli\x3e &nbsp; &nbsp;at Layer.match (/juice-shop/node_modules/express/lib/router/layer.js:123:27)\x3c/li\x3e\x3cli\x3e &nbsp; &nbsp;at matchLayer (/juice-shop/node_modules/express/lib/router/index.js:585:18)\x3c/li\x3e\x3cli\x3e &nbsp; &nbsp;at next (/juice-shop/node_modules/express/lib/router/index.js:226:15)\x3c/li\x3e\x3cli\x3e &nbsp; &nbsp;at compression (/juice-shop/node_modules/compression/index.js:220:5)\x3c/li\x3e\x3cli\x3e &nbsp; &nbsp;at Layer.handle [as handle_request] (/juice-shop/node_modules/express/lib/router/layer.js:95:5)\x3c/li\x3e\x3cli\x3e &nbsp; &nbsp;at trim_prefix (/juice-shop/node_modules/express/lib/router/index.js:328:13)\x3c/li\x3e\x3cli\x3e &nbsp; &nbsp;at /juice-shop/node_modules/express/lib/router/index.js:286:9\x3c/li\x3e\x3cli\x3e &nbsp; &nbsp;at Function.process_params (/juice-shop/node_modules/express/lib/router/index.js:346:12)\x3c/li\x3e\x3cli\x3e &nbsp; &nbsp;at next (/juice-shop/node_modules/express/lib/router/index.js:280:10)\x3c/li\x3e\x3cli\x3e &nbsp; &nbsp;at expressInit (/juice-shop/node_modules/express/lib/middleware/init.js:40:5)\x3c/li\x3e\x3cli\x3e &nbsp; &nbsp;at Layer.handle [as handle_request] (/juice-shop/node_modules/express/lib/router/layer.js:95:5)\x3c/li\x3e\x3cli\x3e &nbsp; &nbsp;at trim_prefix (/juice-shop/node_modules/express/lib/router/index.js:328:13)\x3c/li\x3e\x3cli\x3e &nbsp; &nbsp;at /juice-shop/node_modules/express/lib/router/index.js:286:9\x3c/li\x3e\x3cli\x3e &nbsp; &nbsp;at Function.process_params (/juice-shop/node_modules/express/lib/router/index.js:346:12)\x3c/li\x3e\x3cli\x3e &nbsp; &nbsp;at next (/juice-shop/node_modules/express/lib/router/index.js:280:10)\x3c/li\x3e\x3cli\x3e &nbsp; &nbsp;at query (/juice-shop/node_modules/express/lib/middleware/query.js:45:5)\x3c/li\x3e\x3cli\x3e &nbsp; &nbsp;at Layer.handle [as handle_request] (/juice-shop/node_modules/express/lib/router/layer.js:95:5)\x3c/li\x3e\x3cli\x3e &nbsp; &nbsp;at trim_prefix (/juice-shop/node_modules/express/lib/router/index.js:328:13)\x3c/li\x3e\x3cli\x3e &nbsp; &nbsp;at /juice-shop/node_modules/express/lib/router/index.js:286:9\x3c/li\x3e\x3cli\x3e &nbsp; &nbsp;at Function.process_params (/juice-shop/node_modules/express/lib/router/index.js:346:12)\x3c/li\x3e\x3c/ul\x3e\x0a    \x3c/div\x3e\x0a  \x3c/body\x3e\x0a\x3c/html\x3e\x0a\x82\xc7\xf5\xb7\x1c\x16\xd8\xbf=\x88\xaf\x91\x01'}