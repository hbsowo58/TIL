### API TEST

<br>

postman 설치
<br>
-세팅 & 테마 변경

-workspace (이름 & 설정)

-> 포스트맨을 사용하는 이유 : 프런트엔드 개발자가 완성하지 못했을 때 테스트용

-> 웹브라우저의 한계 get 이외에 test 어려움



---

네이버 -> f12 -> network (탭들)

<br>

### 서버켜기 npx nodemon index.js

<br>

all -> 전부 가져오기

xhr -> 비동기 메서드로 가져올때

<br>

마우스 우클릭 - 메서드

<br>

patch (부분수정) 대격변 패치! 할때의 그 패치가 같은 의미이지 않을까?

<br>

자동완성 -> tabnine Autocomplete (추천)

<br>

```node
app.use(express.json());
json
app.use(express.urlencoded({ extended:false}))
포스트를 사용할때 필요
```

<br>

```
npx nodemon index.js
```

<br>

## query & param 설명 -> 모질라 웹문서

?로 시작해서 key:value ,&로 이을 수 있음 -> 노출되도 되는경우(get)

params /로 시작하는

<br>

morgan, dotenv 설치 

```
dotenv.config();
// .env파일의 내용을 가져오기위해
// 보안에 필요한 노출되지 않을정보(비밀번호, AWS 키코드사례)
app.use(morgan("dev"));
서버에대한 기록 남겨줌
```

<br>



### body

form-data (html form태그)

raw(json)을 사용 할 것 -> key : value



### URL 설계

GET ABC/3



---

### SSR & CSR  (예 cgv vs megabox)

장)'초기'속도가 빠름, 크롤링 편함

단)서버의 부하 커짐 get,post만 지원

<br>

장) 서버의 부하가 작아짐 patch, put 등 지원

단)'초기'속도가 느림,크롤링 안편함

-> next,nuxt등이 단점을 보완하기 위해 출현 -> https://unsplash.com/ post맨으로 확인해보면

'일부' 만들고오는것을 확인할 수 있음

---

```ejs
<%= '<div>hello</div>' %> 코드 직접삽입
<%- '<div>hello</div>' %> 태그인식 필요 
```

---

확장프로그램 EJS language support 설치

---

```ejs
locals.data -> 에러처리할때 필요해서 locals를 붙임
```

