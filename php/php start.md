```
<?php
	//스크립트태그로 감싸듯 코드들을 감싸면 되는 듯
?>
```

<br>

```php
var_dump($var1, $var2)
//변수의 정보를 출력하는 함수
//php에서 변수에 앞에는 $를 붙이는걸로 판단
    
//데이터 타입과 값의 개수or 값자체를 출력하는걸로 판단
```

```php
//mysqli_connect MySQL 서버 또는 MariaDB 서버에 연결하는 함수

//문법
mysqli_connect( host, username, password, databasename, port, socket );

<?php
  $connet = mysqli_connect("localhost","hbs", "7878","Dbn", "3306");
  var_dump( $connet );
?>
```

```php
//mysqli_query 함수는 mysqli_connect 를 통해 연결된 객체를 이용하여 MySQL 쿼리를 실행시키는 함수

//문법
mysqli_query([연결 객체], [쿼리]);

```

```php
//php의 foreach문 배열의 원소나 객체의 프로퍼티 수만큼 반복하여 동작하는 구문

// value만
foreach($array as $value)

foreach($array as $key => $value);
```



