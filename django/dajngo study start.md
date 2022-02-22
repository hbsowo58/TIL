장고 models.py class란?
<br>
MTV 패턴의 M으로 python의 class와 구분되며, DB의 데이터 입출력 부분이다.
어떠한 방식으로 DB의 데이터를 다룰 것인가를 결정한다 -> 백엔드 서버의 핵심
class [클래스 명](models.Model)을 붙인순간, DB와 통신한다
<br>
꼭 데이터 베이스에 저장해야 되는 이유가 뭘까?
<br>
다른 프로그래머가 개발해놓은 코드들을 사용하여 유지보수 하기 유리하다
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
DB에 추가되는 created_at, updated_at은 timestamp이며 언제 생성되었고, 언제 업데이트 되었는지를 가리킨다.
-> created_at의 auto_now_add 와 auto_now는 추가된 시간을 기억/ 알아서 지금을 기억하는 속성이다.
<br>
대부분의 프로그래밍 언어 & DB에 현재 시간을 나타내는 함수가 존재하며 (ex javascript date함수) 시간 비교를 위해 필요하다.
<br>
예시상황으로 models.py를 있었으면 좋겠는 바람의 파일, make migration을 설계도, migrate를 실행이라고 가정한다
<br>
__str__은 매직 메소드(js의 내장메소드?랑 비슷하다고 추측한다)이며, 어떤 '값(객체)을 문자열로 반환한다.
<br>
django의 특징중 하나는 관리자 페이지를 자체적으로 제공한다