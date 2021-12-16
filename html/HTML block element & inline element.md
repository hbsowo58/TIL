# HTML block element & inline element

<br>

element를 이해하기 위해선 태그를 이해해야 합니다.

<br>

>태그란 <div>처럼 Left Angle Braket(또는 Less than) 과 Right Angle Braket (Greater than)으로 이루어진 쌍을 말하며,
>
>한국어로는 여는꺽쇠, 닫는 꺾쇠로 정해진 문자들을 감싼 것을 말합니다.
>
>종류는 1. 시작 태그 2. 종료 태그 3. 빈 태그 등이 있습니다
>
>시작 태그 <a> , <div>
>
>종료 태그 </a>, </div>
>
>빈 태그 <img>, <hr/>

<br>

>시작 태그부터 종료 태그 까지를 element(요소)라고 하며, 빈 태그도 요소에 포함됩니다.

<br>

HTML은 문서를 작성하는 마크업 언어이며, element들의 모음이라고 볼 수 있기 때문에 중요합니다.

<br>

semantic markup 이란 element를 의미 없게 사용하지 말고, 브라우저와 개발자가 의미 있는 태그를 사용하자고 판단되기 때문에

<br>
  
시작점에 있는 사람에게는 element에 대한 이해도를 높이라고 말하고 싶습니다.

<br>

element에는 3가지 종류가 있습니다.

1. block element
2. inline element
3. inline-block element

<br>

element의 특성을 이해해야 효과적으로 마크업 할 수 있고, 나아가 자신이 예상한 UI와 다르지 않게 구현될 수 있습니다.

<br>

block-element의 특징

1. 자동줄 바꿈이 된다.
2. 높이와 넓이를 지정할 수 있다.
3. 넓이를 지정하지 않으면 부모 엘리먼트의 100% 넓이를 상속받는다
4. inline, block element를 모두 자식으로 가질 수 있다.

<br>

inline-element의 특징

1. 자동 줄바꿈이 생기지 않는다.
2. 콘텐츠의 크기만큼 넓이와 높이를 갖는다
3. 높이와 넓이를 지정할 수 없다
4. inline element만 자식으로 가질 수 있다.
5. 넓이와 높이 값을 주기 위해선 block 화 (display:block)

<br>

예외

1.a 태그의 자식으로 block 태그 사용 가능(html5 들어와서 가능)

2.p 태그의 자식으로 인라인 태그'만' 가능

<br>

block tag의 종류

```html
<div>, <address>, <article>, <aside>, <audio>, <blockquote>, <canvas>, <dd>, <div>, <dl>, <fieldset>, <figcaption>, <figure>, <footer>, <form>, <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, <header>, <hgroup>, <hr>, <noscript>, <ol>, <output>, <p>, <pre>, <section>, <table>, <ul>, <video>
```

<br>

inline tag의 종류

<br>

```html
<span>, <a>, <abbr>, <acronym>, <b>, <bdo>, <big>, <br/>, <button>, <cite>, <code>, <dfn>, <em>, <i>, <img>, <input>, <kbd>, <label>, <map>, <object>, <q>, <samp>, <small>, <script>, <select>, <span>, <strong>, <sub>, <sup>, <textarea>, <tt>, <var>
```



