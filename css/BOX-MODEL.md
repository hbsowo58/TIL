CSS는 HTML elements에 '디자인'을 입혀 화면에 display 하는 방법을 정의합니다.

<br>

CSS 목적은 HTML을 디자인하기 위함입니다.

<br>

CSS가 출몰하게 된 이유는 : 기존의 HTML 딱딱한 문서에서 줄 간격, 폰트 사이즈 등을 조절하여 가독성을 높이기, 태그들 사이에 차이를 부여해서 콘텐츠 간의 분별력을 높여 웹페이지의 가치를 높이는 역할을 합니다.

<br>

요약하자면 '구조'와 '표현'의 분리라고 생각합니다.

<br>

CSS에 학습하면서 중요하다고 생각되는 부분은 크게 BOX-MODELING / POSITION + float에 대한 이해라고 생각합니다. (다른 내용들은 필요할 때 검색해서 사용하더라도 위에 2가지 + @는 이해가 필요)

<br>

BOX-MODEING에 대해서 설명해보겠습니다.

<br>

CSS는 HTML을 디자인하기 위함입니다. HTML은 element들의 집합이라고 해석할 수 있고요.

<br>

그렇기에 elements의 구조에 대한 이해가 필요합니다.

![box-model](https://user-images.githubusercontent.com/48181483/95279366-86358f00-088d-11eb-844a-5757a364ed09.gif)

<br>

elements는 위의 그림과 같은 구성을 갖습니다.

<br>

1. content : 요소가 담고 있는 내용
2. padding : content와 border 사이의 간격
3. 3.border : 테두리 선
4. margin : border와 다른 요소 사이의 간격

<br>

또한 CSS에서는 위와 같은 박스의 구성에 따라 box-sizing 속성을 통해 box의 크기를 조절할 수 있습니다.

<br>

box-sizing 속성에는 속성값으로 크게 두 가지 값을 갖습니다.

<br>

1. content-box : 콘텐츠의 크기 이외의 다른 요소들에 의해 전체 영역 크기가 변경됨(기본값)
2. border-box : 콘텐츠의 크기 이외의 다른 요소들에 의해 전체 영역 크기가 변경되지 않음

<br>

default 값이 content-box이고, 예를 들어보겠습니다.

<br>

<img width="1280" alt="initial" src="https://user-images.githubusercontent.com/48181483/95279387-964d6e80-088d-11eb-8331-6988fe259efa.png">

<br>

위와 같은 상황을 만들기 위해서 html 코드와 css 코드를 첨부하겠습니다.

<br>

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>box-sizing</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
    <div class="box4"></div>
</body>
</html>
```

```css
body{
    border:1px solid black;
}
.box1{
    background-color: red;
    width: 100px;
    height: 100px;
}
.box2{
    background-color: orange;
    width: 100px;
    height: 100px;
}
.box3{
    background-color: yellow;
    width: 100px;
    height: 100px;
}
.box4{
    background-color: green;
    width: 100px;
    height: 100px;
}
```

'같은' 작업 폴더 내에 동일 HTML, CSS 파일이 만들고 위와 같이 코드를 작성합니다. (reset css는 사용하지 않았습니다)

<br>

박스의 구성 4가지를 알아보기 위해 코드를 조금 변경합니다.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>box-sizing</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box1">Hello world!</div>
    <div class="box2"></div>
    <div class="box3"></div>
    <div class="box4"></div>
</body>
</html>
```

```css
body{
    border:1px solid black;
}
.box1{
    background-color: red;
    width: 100px;
    height: 100px;
}
.box2{
    background-color: orange;
    width: 100px;
    height: 100px;
    padding : 10px;
}
.box3{
    background-color: yellow;
    width: 100px;
    height: 100px;
    border: 1px solid black;
}
.box4{
    background-color: green;
    width: 100px;
    height: 100px;
    margin: 10px;
}
```

첫 번째 div element의 콘텐츠를 넣고, 두 번째에는 padding을, 세 번째에는 border를, 네 번째에는 margin을 넣었습니다.

<br>

<img width="1280" alt="change" src="https://user-images.githubusercontent.com/48181483/95279411-a5ccb780-088d-11eb-95d0-6808ea2405f0.png">

<br>

그림처럼 변하게 되는데요, 1번 박스 안에는 콘텐츠들이, 2번 박스는 커진 느낌을 받을 수 있고 3번 박스에는 외곽선이

4번 박스는 여백이 생기게 되었네요

1,3번은 이해가 가고, 4번은 margin 속성에 대해 이해하면 납득이 가는데 제가 말하고 싶은 내용은 2번 박스입니다.

2번 박스는 안쪽 여백(padding) 속성을 사용했는데 상자가 커졌습니다. 이것을 개발자 도구로 보게 되면

<img width="1280" alt="padding example" src="https://user-images.githubusercontent.com/48181483/95279448-b67d2d80-088d-11eb-84ef-c07d73975840.png">

<br>

우측 하단쯤에 박스 모델이 나오면서, 기존의 상자의 크기인 100x100 상자에 안쪽 여백이 10px씩 생기게 되어

<br>

주황색 div가 차지하는 공간이 커지게 됨을 알 수 있습니다. box-sizing 속성의 default 값이 content 박스이기 때문인데요.

<br>

위에서 설명한 콘텐츠의 크기 이외의 다른 요소들에 의해 전체 영역 크기가 변경되었기 때문입니다.

<br>

box-model에 대한 이해도가 없게 되면 개발자가 원하는 디자인을 하는데 어려움을 겪을 수 있게 됩니다. 해결하는 방법으로는 box-sizing 속성을 border-box로 변경시키는 것입니다.

<br>

```css
body{
    border:1px solid black;
}
.box1{
    background-color: red;
    width: 100px;
    height: 100px;
}
.box2{
    background-color: orange;
    width: 100px;
    height: 100px;
    padding : 10px;
    box-sizing: border-box;
}
.box3{
    background-color: yellow;
    width: 100px;
    height: 100px;
    border: 1px solid black;
}
.box4{
    background-color: green;
    width: 100px;
    height: 100px;
    margin: 10px;
}
```

<br>

HTML 파일은 그대로 두고 CSS의 두 번째 박스에 box-sizing: border-box를 주게 되면

<br>

<img width="1280" alt="box-sizing change" src="https://user-images.githubusercontent.com/48181483/95279483-c98ffd80-088d-11eb-816a-f74ba61c11f0.png">

원하는 대로 구성이 되었습니다. box-model에 대한 이해를 바탕으로 작업하는 HTML elements의 부피를 어떻게 조절할 것인가를 고려한다면, CSS의 항해를 순항할 수 있을 것입니다.

<br>

[참고자료](https://opentutorials.org/module/484/4121)

<br>

[원본](https://hbsowo58.tistory.com/manage/newpost/471?type=post&returnURL=https%3A%2F%2Fhbsowo58.tistory.com%2F471)