react project 문제 버전 문제 발생시 문제를 회피하는 방법

```react
// .env파일 작성후
SKIP_PREFLIGHT_CHECK=true

node_modules,package-lock.json 삭제
package.json
react-scripts: 3.4.0 버전 이상

npm i
```



프로젝트 생성시 할일

1. lint, prettier, lint-stage,huskey등 설정
2. router등 라이브러리 설치