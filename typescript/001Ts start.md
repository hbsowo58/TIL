JS는 동적타입언어이다 <-> C, C# JAVA (정적)

메모리 소비가 많아진다



문자열의 정의 : 0개 이상의 문자들로 이루어진 '배열'

'' 'A', 'ABC'



한글등을 표현하기 위해 2byte

 emoji는 2~4바이트(유니코드 두개믹싱)



타입스크립트의 장점

에디터가 도와줌

할당을 할때, 맞는 값을 할당하지 않으면 컴파일 이전에 에러가남 <-> 런타임에 에러가 난다는뜻은(고객이 볼수도있다)

트랜스파일링을 해줘야한다(컴파일)

대규모에 개발에 유리(기준70~100명개발 소규모 개발과는 '차원'이 다르다) 

bable하지않아도 자체적으로 컴파일





백엔드 개발자가 프론트엔드로 넘어올때 제일어려운것 1.css 2 프로토타입

-> 타입스크립트쓰면 스무스하게 넘어옴

프론트의 약점은 클래스 기반을 잘모른다



프론트의 마인드

'타입만' 도입하겠다, 인터페이스까진 도입하겠다



타입스크립트의 목적

-> 자바스크립트가 아쉬우니까 도입이 됫겠지

프레임워크가 왜 생겨날까?

-> 프로그래밍언어 자체에서 지원하는 내용이 빈약하니까



자바스크립트 버그

typeof null, 0 !== -0

하위호환때문에 못고치는데, 버전업을 위해선 하위호환을 고려해야한다



'기술이 뛰어나다고 환영받는건 아니다, 접근하기가 좋아야된다'

'선택지가 많아지면 복잡해지는거야'



타입스크립트란? 자바스크립트의 슈퍼셋이다. (상위확장)

---

옵셔널 체이닝 들어올예정



const o = {}



o.user -> undefined

o.user.name -> undefined에 name이라는 프로퍼티가 없다(에러)



o && o.user && o.user.name = o?.user?.name

---

webpack을 쓰는 가장큰 이유

모듈 번들러: 모듈 <src script> 50개 심지어 순서까지 생각해야된다 (웹팩이 없다면)

이유중 하나 바벨작업등을 웹팩에 설정가능, 모듈번들링을 하면서 '모듈화'지원 -> import export





---



```typescript
$ npm install -g typescript 타입스크립트설치
$ tsc -v 버전확인
```

```typescript
프로젝트 폴더환경후 
example.ts 생성
$ tsc example 컴파일

```

```typescript
tsc --init pake.json에 풀린부분 문서보고확인 target = "es5" 등
tsc -w (watch모드 하나라도 바뀌면 컴파일 다시하라)
```

 

export (default) ->꼭 이이름으로 받아야됨 as Person

```
node index 시작
```





common.js












