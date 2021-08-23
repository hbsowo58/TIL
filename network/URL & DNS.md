# URL Uniform Resource Locator

인터넷에서, 어느 사이트에 접속하기 위해서 입력해야 하는, 주소를 포함한 일련의 문자, 맨 앞에

'http://'를 입력하고, 다음에 해당 사이트의 주소를 표시 [정의 출처 : [Oxford Languages](https://languages.oup.com/google-dictionary-ko)]

<br>

네트워크 상에서 자원이 어디있는지 알려주기 위한 규약 -> 웹 페이지를 찾기 위한 주소

URL은 웹 사이트 주소뿐만 아니라 컴퓨터 네트워크상의 자원을 모두 나타낼 수 있음

주소에 접속하려면, 해당 URL에 맞는 프로토콜을 알아서 동일한 프로토콜로 접속해야함

ex) FTP 프로토콜인 경우 FTP 클라이언트 이용, HTTP인경우 웹 브라우저 이용

<br>

문법

```
scheme:[//[user:password@]host[:port]][/]path[?query][#fragment]
```

- URL은 제일 앞에 자원에 접근할 방법을 정의해 둔 프로토콜 이름을 적는다. [gopher](https://ko.wikipedia.org/wiki/고퍼_(프로토콜)), [telnet](https://ko.wikipedia.org/wiki/텔넷), [ftp](https://ko.wikipedia.org/wiki/파일_전송_프로토콜), [http](https://ko.wikipedia.org/wiki/HTTP), [usenet](https://ko.wikipedia.org/wiki/유즈넷) 등이다.
- 프로토콜 이름 다음에는 프로토콜 이름을 구분하는 구분자인 ":"을 적는다.
- 만약 IP 혹은 Domain name 정보가 필요한 프로토콜이라면 ":" 다음에 "//"를 적는다.[[3\]](https://ko.wikipedia.org/wiki/URL#cite_note-3)
- 프로토콜명 구분자인 ":" 혹은 "//" 다음에는 프로토콜 마다 특화된 정보를 넣는다.
  - 예1) `http://www.somehost.com/a.gif` - IP 혹은 Domain name 정보가 필요한 형태 ( www.somehost.com에 있는 a.gif를 가리키고 있음 )
  - 예2) `ftp://id:pass@192.168.1.234/a.gif` - IP 혹은 Domain name 정보가 필요한 형태 ( 192.168.1.234에 있는 a.gif를 가리키고 있음 )
  - 예3) `mailto:somebody@mail.somehost.com` - IP정보가 필요없는 프로토콜 ( mailto 프로토콜은 단지 메일을 받는 사람의 주소를 나타냄 )

[출처:https://ko.wikipedia.org/wiki/URL]

<br>

URL 분석

http://www.example.com:80/path/to/myfile.html? key1=value1&key=value2#somewhereinTheDocument

<br>

1.http : 프로토콜(통신 규약)

<br>

2.www.example.com : 도메인 이름 (직접 IP address 가능)

<br>

3. :80 포트 HTTP는 80 HTTPS는 443 ->생략 가능 그렇지 않으면 필수

<br>

4.path/to/myfile.html : 웹 서버에서 자원에 대한 경로

<br>

5.key1=value1&key=value2 : 웹서버에 제공하는 추가 파라미터 & 기호로 구분 키/값 리스트

<br>

6.#somewhereinTheDocument : 자원 자체의 다른 부분에 대한 anchor (bookmark 개념)

<br>

---

# DNS Domain Name System

ex) 전화번호부

<br>

인터넷에서 사용 가능한 모든 웹 서버에 사람이 읽을 수 있는 주소를 제공

-> IP는 기억하기 어렵고 시간이 지남에 따라 변경될 수 있음

<br>

도메인 이름의 구조(점으로 구분)(오른쪽에서 왼쪽 기준)

developer.mozila.org

<br>

org : TLD (최상위 도메인) -> 도메인 이름 뒤에 존재, 서비스의 일반적인 목적 (.com .org .et)

-> 지역. us .ko 특정 국가/언어의 자원. gov(정부 부서) .edu (교육 및 할 술 기관)

<br>

developer.mozila : 레이블 -> A부터 Z까지의 문자 0부터 9까지의 숫자만 포함하는 시퀀스

TLD 바로 앞에 있는 레이블을 SLD(*Secondary Level Domain*)라고도 함

<br>



