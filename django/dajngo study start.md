장고 models.py class란?
<br>
<br>
MTV 패턴의 M으로 python의 class와 구분되며, DB의 데이터 입출력 부분이다.
어떠한 방식으로 DB의 데이터를 다룰 것인가를 결정한다 -> 백엔드 서버의 핵심
class [클래스 명](models.Model)을 붙인순간, DB와 통신한다
<br>
<br>
꼭 데이터 베이스에 저장해야 되는 이유가 뭘까?
<br>
<br>
다른 프로그래머가 개발해놓은 코드들을 사용하여 유지보수 하기 유리하다
<br>
<br>
```
import json # json 데이터를 처리하기 위해 import
from django.views import View # django.views에서 View 가져오기
from django.http import JsonResponse
django http에서 서버의 요청에 대한 응답을 Json으로 응답하기 위해 JsonResponse 가져오기
```
<br>
.gitignore 파일은 git에서 변경감지를 하지 않을 파일들을 설정한다. 따로 작성하지 않고 gitignore io 사이트를 사용해도 된다.
<br>
<br>
DB에 추가되는 created_at, updated_at은 timestamp이며 언제 생성되었고, 언제 업데이트 되었는지를 가리킨다.
-> created_at의 auto_now_add 와 auto_now는 추가된 시간을 기억/ 알아서 지금을 기억하는 속성이다.
-> auto_now_add는 (최초 생성일자 -> 다른 것은 변해도 이필드는 변하지 않는다)
-> auto_now(수정 일자)
<br>
<br>
대부분의 프로그래밍 언어 & DB에 현재 시간을 나타내는 함수가 존재하며 (ex javascript date함수) 시간 비교를 위해 필요하다.
<br>
<br>
예시상황으로 models.py를 있었으면 좋겠는 바람의 파일, make migration을 설계도, migrate를 실행이라고 가정한다
<br>
<br>
__str__은 매직 메소드(js의 내장메소드?랑 비슷하다고 추측한다)이며, 어떤 '값(객체)을 문자열로 반환한다.
<br>
<br>
django의 특징중 하나는 관리자 페이지를 자체적으로 제공한다
<br>
<br>
form 태그 생성 -> label과 input, for 와 id가 짝꿍(깐부)다
<br>
<br>
"name"속성의 존재는 "서버"를 위한 것이다 -> 이름을 불러주기 전에는 의미x
-> textarea 태그에서는 name을 default로 가지고있다
<br>
<br>
1.request.POST['key'] -> key라는 이름의 key값이 없으면 출력이 없다
2.request.POST.get('title') -> 없으면 NOEN을 리턴하고 주로 2의 방ㅂ버을 사용한다(서버의 ERROR로 인한 다운 방지)
<br>
<button>
    <a>버튼</a>
</button>
<br>
<br>
버튼안에 a의 밑줄이 자동으로 발생되며 a태그안에 button태그를 넣으면 해결이 가능하지만, 권장하지 않는다
-> 웹 접근성에 위배되고, 두가지 이벤트가 충돌할 수 있으며 a태그의 자식요소로는 상호작용이 없는 요소를 권장한다
-> 또한 ,a태그의 자식요소로 h1 태그를 넣는 것도 웹 접근성에 좋지 않다
<br>
<br>
django의 model은 db가 아니며, query는 데이터베이스를 조작한다 (조작이라는 것은 조회,추출,삽입,삭제를 뜻한다)
model은 db를 구조화하려고, 인터페이스화 시킨 것 이다
<br>
<br>
ORM은 직역하면 객체 관계 대응으로 해석할 수 있으며(하나의 값을 다른 값으로 대응) 한자로는 사상이라고할 수 있다
Django와 SQL은 각각 다른언어로 통신할 수 없기 때문에, ORM이라는 번역(가)를 고용한다고 생각하면 된다
목적은 DB를 객체로 조작하기 위함이다
<br>
<br>
```
pip install -r requirements.txt
```
위 명령어를 통해, requirements파일에 있는 패키지들을 같은 버전으로 모두 설치할 수 있다
<br>
<br>
Test(models.Model) -> 스키마이며 models의 Model 클래스를 상속받는다.
title, content같은 필드(열)을 가질 수 있고 기본적으로 pk를 포함한 필드가 생기기 때문에
작성한 필드 + 1개가 총 필드 수가 된다
<br>
<br>
models.CharField 와 TextField는 모두 텍스트를 받는 데이터타입이지만, max_length를 정해야 한다는 차이점을 가지고있다
<br>
<br>
migrate(이주하다) migration(이주) make(만들다, 하다 또는 프로그래밍의 빌드도구 명령어)로 해석되며
django가 model에 생긴 변화를 반영할지를 정한다(django 기준 db.sqlite3 파일)
<br>
<br>
setting.py 파일 안에 -> 이미 내장 app이 있고, 내부에 필요한 테이블들이 sqlite3파일에 저장되어 있다
[app이름_클래스 네임 형식으로]
<br>
```
python manage.py sqlmigrate 클래스명 버전
```
위의 명령어로 현재 명령어의 sql 버전을 확인할 수 있다
<br>
<br>
사용방법
Test.objects.all() -> 전체 쿼리셋의 복사본
class name | manager | query set
<br>
<br>
데이터 처리의 4가지 CRUD -> ex)페이스북 게시글 생성,조회,수정,삭제
<br>
<br>
create하는방법
1.인스턴스 생성후 하나씩 저장
2.초기값과 함께 생성후 저장
3.create(생성+저장) ->권장 + id의 short cut인 pk권장
<br>
<br>
read (CRUD중 가장중요) -> 데이터를 다루는 것은 필요한 데이터를 필터링하는 것
<br>
<br>
쿼리셋을 리턴하는 두가지
1. 새로운 쿼리셋 리턴 (create)
2  쿼리셋을 리턴 x (read)
<br>
<br>
4가지 키워드(client,server,request(요청),response(응답))
<br>
<br>
view(하는일 많음 -> 중요?)

---

extension 설치 확인

---

1. "가상환경 설정 & 활성화" 왜 만드나? "독립적인 개발 공간" -> 방 예시 가상환경을 통해 방을 맞춤
python -m venv [가상환경 이름] -> venv 폴더 생성 -> 활성화
<br>
<br>
source venv/Scripts/activate
(venv) 확인 pip list
<br>
<br>
2 dajngo 설치

pip install django==3.2.12


<br>
<br>
3.프로젝트 생성

django-admin startproject fristpjt . (firstpjt, manage.py생성)

.을 붙이냐 안붙이냐에 따라, manage.py가 firstpjt 안으로 들어간다
<br>
<br>
4.서버 실행 로켓확인

python manage.py runserver

5 application 생성(복수)
<br>
<br>
python manage.py  startapp [app명s]

6 앱등록하는 과정
<br>
<br>
---

반복

---

view 함수의 필수 인자(request)
<br>
<br>
app 폴더안에 templates  폴더안에 넣기"약속"
<br>
<br>


---

django언어 설정(setting.py)
<br>
<br>
python manage.py startapp articles
<br>
<br>




코드작성순서(데이터의 흐름)



URL -> VIEWS -TEMPLATES 
