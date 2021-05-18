장고 models.py class란? 

꼭 데이터 베이스에 저장해야되는 이유가 뭘까?



```import json # json데이터를 처리하기 위해 import
import json # json데이터를 처리하기 위해 import
from django.views import View # django.views에서 View 가져오기
from django.http  import JsonResponse
django http에서 서버의 요청에 대한 응답을 Json으로 응답하기 위해 JsonResponse 가져오기
```

장고 마이그레이션을 해서, 디비에 적용을 했더니 내가 만들지 않은 테이블인 django_session, migrations, content_tpye이라는 테이블이 생겼다 뭐지??