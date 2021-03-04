```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="app">
        {{ message }}
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        var app = new Vue({  // new 키워드를 사용한 '인스턴스' 생성
            el: '#app',      // DOM element의 'el'
            data: {          // 변수들이 들어가는 속성
                message: '안녕하세요 Vue!'
            }
        })
    </script>
</body>

</html>
```

출처 : https://kr.vuejs.org/v2/guide/index.html

<br>

문자열을 랜더링하는 예제 같지만, 동적으로 바인딩이 되어있다.

console api를 사용하여 app.message를 변경해보면 화면이 새로고침없이 변경된다.

<br>

```html
<div id="app-2">
  <span v-bind:title="message">
    Hover your mouse over me for a few seconds
    to see my dynamically bound title!
  </span>
</div>
```

<br>

```js
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})
```

를 추가하면 페이지가 로드된 시간을 확인할 수 있다.

```html
<div id="app">
    <h1>{{ message }}</h1>
    <button v-on:click="changeMsg">HEY</button>
</div>
```

```js
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello, world',
        nextMsg: 'Hello, Vue!'
    },
    methods: {
        changeMsg() {
            this.message = this.nextMsg;
        }
    },
})
```

위처럼 작성하면 버튼 클릭시 메시지가 변경되는 클릭 이벤트를 사용할 수 있다.

data에 있는 변수들에 접근하려고 할때는, this키워드로 접근한다(메서드를 호출할때는 메서드를 호출한 객체를 this가 가리키기 때문)

<br>

vue 기본

