# HTML Basic Analysis

HTML은 문서이며, 기본 양식이 존재합니다.

<br>

```html
<body>Hello Wolrd</body> <!-- index.html --> 
```

<br>

메모장에 최소한의 코딩만으로도 브라우저에 원하는 내용을 출력 가능합니다.

<br>

최소한의 문서 구조를 위해 IDE에 EMMET 명령어를 사용하겠습니다 ! 또는 html:5를 사용해 주세요

<br>

아래와 같은 기본서식이 나타나는데요.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

<br>

코드 한줄 추가하고 설명하겠습니다. 

5번째라인 밑에 title element와 meta element사이에 한줄 추가하겠습니다.

```html
<meta http-equiv="X-UA-Compatible" content="ie=edge">
```

<br>

```html
<!DOCTYPE html> 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

<br>

한줄씩 아는대로 설명해보겠습니다.

```html
<!DOCTYPE html> 
```

<br>

해당 코드는 첫 번째 코드로 모든 HTML 문서의 가장 최상단에 위치해 있어야 합니다.

예전에는 주석만 존재해도 에러가 발생했다고 알고 있습니다

<br>

역할은,  이 문서가 어떤 버전의 HTML로 만들어졌는지 브라우저에게 선언하는 역할을 합니다.

<br>

작성하는 시점은 HTML5버전이며, 브라우저는 아래 코드들을 HTML5버전에 따라 해석합니다.

<br>

DOCTYPE은 HTML 태그가 아니며, 문서의 정보입니다.

<br>

버전 4.01 때 DOCTYPE은

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

이러하며, 현재는 상당히 간략해졌죠? 그렇다면 DOCTYPE은 왜 필요할까요?

<br>

브라우저는 2가지 렌더링 모드를 가집니다. 쿼크 모드 와 표준모드이죠(쿽스라고 읽을 수 있을 것 같습니다)

<br>

선언된 DOCTYPE에 따라, 렌더링 모드를 판단하며 최신이면 표준모드 오래된 문서면 쿼크 모드로 렌더링 합니다.

<br>

각 모드에 따라 브라우저마다 다른 UI가 출력될 수 있으니 항상 HTML 문서의 포함해야 합니다.

<br>

```html
<html lang="en">
```

<br>

다음은 두 번째 줄인데요,시작 태그 HTML로 구성되어 있습니다. 11번째 종료태그 HTML과 쌍입니다.

<br>

속성값으로 lang을 갖고 있는데 language 언어를 뜻합니다.en은 english 약어입니다.

<br>

우리는 한국어를 사용할 것이기 때문에 ko 또는 kor를 사용하겠습니다. (korea)

```html
<html lang="ko">
```

<br>

```html
<head>
    ... 
</head>
```

<br>

세 번째 줄의 시작 head 태그부터 여덟 번째 종료 head 태그까지는 쌍을 이룹니다.

<br>

head 태그는 브라우저에 표시되지 않으며, title처럼 문서의 제목이나 css의 링크(스타일링을 원할 때), 파비콘 또는 다른 메타 데이터들을 자식으로 갖습니다(작성자, 중요 키워드, 검색 노출 등) 

<br>

우리는 현재 3개의 메타태그와 1개의 타이틀 태그를 갖고 있습니다.

<br>

추가할만한 메타태그들을 몇 가지 소개하겠습니다.

```html
<meta name="Description" content="소개" />
<meta name="Keywords" content="키워드들" />
<meta name="robots" content="noindex, nofollow" />
```

<br>

위의 메타 태그들은 첫 번째, 현재 페이지에 대한 설명(검색엔진이 확인) 

<br>

두 번째, 키워드들(마찬가지 검색엔진이 확인),

<br>

마지막으로 검색엔진이 수집할지 안 할지 정하는 정보로, 현재는 검색엔진에 노출되지도 색인되지도 않지만(검색되지 않는 사적인 페이지를 만들 때) 검색에 노출되고 싶다면 index, follow로 속성값을 변경하여 SEO를 최적화할 수 있습니다.

<br>

다시 우리의 코드로 돌아와서 

```html
<meta charset="UTF-8">
```

네 번째 줄의 메타태그는 우리 문서의 인코딩 방식입니다.

<br>

해당 코드가 없게되면 브라우저의 한글등이 깨져보이는 현상이 발생할 수 있습니다



<br>

UTF-8과 EUC-KR이 있는데 현재 UTF-8을 주로 사용하며 인코딩 방식으로도 많은 내용이 있기 때문에 생략하겠습니다

<br>

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

다섯 번째 줄에 메타태그에는 뷰포트에 대한 내용이며 우리말로 화면 상의 표시 영역입니다.

<br>

PC와 모바일의 뷰포트는 크기가 다르죠, 각 기기마다 뷰포트의 크기가 다르기 때문에

서로 다른 화면이 나타날 수 있기 때문이며 해당 content 속성에 너비를 device-width

장치 너비에 맞추어 표시함을 나타냅니다.

<br>

initial-scale는 초기 배율을 1.0으로 지정한다는 속성이며, minimum-scale과 maximum-scale 속성값으로 결정됩니다.

<br>

```html
<meta http-equiv="X-UA-Compatible" content="ie=edge">
```

여섯번째 줄 meta태그는 IE문서 모드입니다. content속성의 ie=edge는 가장 최신 표준 모드를 선택하는 문서모드입니다. DOCTYPE과 함께 사용해야 유효합니다.

<br>

왜 필요할까요? IE 브라우저는 버전마다 렌더링 방식이 다르기 때문에 비표준 모드를 기본으로 갖고 있는 버전이 존재하고 표준모드가 지원되는 버전이 있습니다.

<br>

 그렇기 때문에 브라우저를 업데이트하지 않는 사용자에 경우에 개발자가 의도한 UI가 보이지 않을 가능성이 있기 때문입니다. 이를 해결할 코드로

```html
<meta http-equiv="X-UA-Compatible" content="IE=9"> /*IE9 표준모드*/
<meta http-equiv="X-UA-Compatible" content="IE=8">
<meta http-equiv="X-UA-Compatible" content="IE=7">
```

각 버전에 맞게 표준모드로 제공하고 있으나 우리는 가장 최신 모드로 표시합니다.(다른버전은 퇴화될 예정)

<br>

```html
<title>Document</title>
```

해당 문서의 제목을 나타냅니다 가장 최상단에 브라우저 제목을 보면 title 태그의 콘텐츠 값이 제목이 되는 것을 확인하실 수 있습니다.

```html
<body>
</body>
```

마지막으로 9~11번째 줄의 시작 body 태그와 종료 body 태그, body element입니다.

<br>

body element 안의 콘텐츠들이 브라우저에 나타나며 UI 작업의 대부분을 이곳에서 작성합니다

<br>

HTML 기본 양식에 대하여 알아보았으며, 바탕으로 웹 개발을 지속해보겠습니다

<br>

[원본글](https://hbsowo58.tistory.com/470)

