# jsonplaceholder를 이용한 포스트잇 페이지 구현

폴더 생성

<br>

```shell
npm init -y
```

-> 눈에 보이는 결과물 packge.json 생성

다른 사람들이 만들어놓은 모듈을 npm을 통해 가져와서 사용할 수 있는 환경 생성

옵션들을 디폴트 값으로

<br>

```shell
npm i axios ejs express nodemon
```

자동으로 packge-lock.json & node_modules 생성 및

의존성에 axios ,ejs, express, nodemon 저장

<br>

axios 통신용 > 사용해서 jsonplaceholder에 필요한 데이터들 얻어올 예정(많이 사용됨)

ejs(정적파일을 생성하기 위함 전시간에 많이함)

express(웹 서버)

nodemone (vscode에서 라이브서버때 예시처럼 저장을 하면 바로 반영될 수 있도록)

<br>

```shell
"start": "nodemon server.js"
```

<br>

scripts에 nodemon server.js -> npm start로 간소화

<br>

server.js 생성 & 기존에 활용했던 코드에 한줄 추가하기

```javascript
const express = require("express");
const axios = require("axios"); // 추가
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/views"));

app.listen(8000, () => {
    console.log("server is listening on 8000");
});
```

넣어주고 npm start 입력 서버 확인

<br>

views폴더 생성 & index.ejs 생성

<br>

! emmet 단축명령어 생성후 변경

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PostIt Project</title>
</head>
<body>
    hello world!!
</body>
</html>
```

서버단에서 html파일을 생성해서 랜더링할 예정(서버사이드 랜더링)

<br>

```javascript
app.get('/', (req, res) =>{
    res.render("index", { });
})
```

클라이언트로부터, get 요청으로 / req,res 응답으로 index를 랜더링 해주겠다.

<br>

```javascript
app.get('/', (req, res) =>{
    axios.get("https://jsonplaceholder.typicode.com/posts/")
    .then(response =>{
        res.render("index", {});
    })
    .catch((err) =>{
        res.render("error");
    })
})
```

axios를 사용해 데이터를 가져오고 성공하면 index를 랜더링 실패하면 error를 랜더링

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error page</title>
</head>
<body>
    hello error!!
</body>
</html>
```

<br>

bootstrap css,script CDN 방식 적용

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PostIt Project</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
</head>
<body>
    hello world!!
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
</body>
</html>
```

<br>

bootstrap5홈페이지에서 nav 하나 가져와서 수정, 디자인 용이기 때문에 100% 일치할 필요 x

```html
<nav class="navbar navar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
        <div class="h5 text-white">
            JSONPlaceholder
        </div>
    </div>
</nav>
```

<br>

```javascript
res.render("index", { data: response.data});
```

axios를 통해 데이터를 가져와서 성공을 했을시, data로 데이터 전송 및 데이터 출력해보기

```html
    <div>
        <% data.forEach(li => {%>
        <div>

            <div>
                <%= li.title %>
            </div>
            <div>
                <%= li.body %>
            </div>
        </div>
        <% })%>
    </div>
```

<br>

디자인 작업

<br>

```javascript
app.get('/', async (req, res) =>{
    // console.log(req.query);
    const page = Number(req.query.page)
    await axios.get("https://jsonplaceholder.typicode.com/posts/",{
        params: {
            _start: page ? 9 * (page - 1) : 0,
            _limit: 9,
        }
    })
    .then(response =>{
        res.render("index", { data: response.data, page: page || 1 });
    })
    .catch((err) =>{
        res.render("error");
    })
})
```

query를 확인해보고, page 로직을 추가

```html
    <nav class="p-5" aria-label="...">
      <ul class="pagination">
        <% if(page ===1){ %>

        <li class="page-item disabled">
          <span class="page-link">Previous</span>
        </li>
        
        <% } else { %>
        <li class="page-item">
        <a class="page-link" href="?page=<%=page-1%>">Previous</a>
        </li>
        <% } %> 


        <% for( let i = 1; i <= 12; i++ ) { %>
            <% if(i === page){%>
                <li class="page-item active">
                    <a class="page-link" href="/?page=<%=i%>"><%= i %> </a>
                </li>
                <% }
                
                else {%>
                    <li class="page-item">
                        <a class="page-link" href="/?page=<%=i%>"><%= i %> </a>
                    </li>
                    <% }%>
                <% } %>

        <li class="page-item">
          <a class="page-link" href="?page=<%=page+1%>">Next</a>
        </li>
      </ul>
    </nav>
```

<br>

detail 페이지 구현

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detail</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar navar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <div class="h5 text-white">
                JSONPlaceholder
            </div>
        </div>
    </nav>

    <main class="p-5">
        <div>
            <div>
                <%= post.title %>
            </div>
            <div>
                <%= post.body %>
            </div>
        </div>

        <ul>
            <% comments.forEach(comment => {%>
            <li>
                <div>
                    <%=comment.name%>
                </div>
                <div>
                    <%=comment.body%>
                </div>
            </li>
            <% }) %>
        </ul>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
</body>
</html>
```

```javascript
app.get('/detail/:id', async (req, res) => {
    const { id } = req.params;
    const urls = [
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    ];

    console.log(id);

    const [post, comments] = await Promise.all(
        urls.map((url) => {
            return axios
            .get(url)
            .then((res) => res.data)
            .catch((err) => console.log(err));
        })
    )
    res.render("detail",{ post:post, comments:comments})
})
```

디자인 작업을 하게되면 끝