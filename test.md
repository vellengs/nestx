# API 


## Course API

## Reporting API

## 


## 1. 通过 Udemy API 获得登录后的 access_token.
如下:
```
portal_id = '8888'
client_id = 'tefQlPLmIeAmXUzEeKsLvOg3JyhqCvBoW87sjZoF' client_secret = 'F2jpNofVsFwR6WLB7pfbtsd1AgjfFZGuESFg' \
'6RVelB4JMQXL7ln31adioSYXQenh5GQ6CjpL' \ 'PxFS7pB6f5sIeGZa2as00XgGbEcupyKNehYC'
  base64 HTTP Header
auth_token = 'Basic ' + base64.b64encode("{}:{}".format(client_id, client_secret).encode()).decode('ascii')
```
## 2. Udemy 提供一个接受 access_token 的URL. 格式例子如下：
-  host/api/request?return={request_uri}&access_token={access_token}
-  如果access_token 接受则自动登录并转向资源请求地址。
-  如果access_token 不接受则跳转到 403地址（提供一个返回按钮）。
注释：后端可以通过 fromUrlQueryParameter('access_token')