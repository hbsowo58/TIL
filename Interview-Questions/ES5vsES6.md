# ES5 ES6 차이

ES5 ES6의 차이에 있어 ES란 ECMASCRIPT를 뜻하며 자바스크립트의 표준, 규격을 나타내는 용어입니다.

 <br>

또한 뒤에 숫자는 버전을 뜻하는데 ES5(2009년) ES6(2015년) 출시하였습니다.

 <br>

버전별로 확인하다 보면 ES6 이후에는 매년 업데이트가 되고 있는 반면 ES5와 ES6 사이에는 큰 시간 차이가 있는데요.

 <br>

이 차이 동안 많은 기능들을 추가하였습니다.

 <br>

오늘날 사용 버전에 있어 ES6+(ES6 이후)를 요구하고 있다고 생각합니다.

그렇기에 ES5에 비해서 ES6에 추가된 기능들을 나열해보겠습니다.

 <br>

1. let, const 키워드 추가

기존의 var 키워드에 비해 블록 레벨 스코프를 가지며 재할당이 가능한 let, const가 추가되었습니다.

변수에 생명주기에 영향을 끼치며 키워드만 보아도 변수의 변화가 생기는지 안 생기는지 알 수 있게 되었습니다.

호이스팅에 있어서도 변화가 생겼지만 자세히 다루지 않겠습니다. (var vs let, const 참고)

```
//es5

var variable = 1;

//es6

let sum = 2;

const result = 3;
```

 

2. Arrow fucntion 추가

 <br>

화살표 함수가 추가되어 함수를 간결하게 나타낼 수 있습니다.

가독성 및 유지 보수성이 올라갔다고 판단됩니다. 다만 기존의 함수와 this 바인딩이 다릅니다.

화살표 함수는 lexical this를 따르기 때문에 추가적인 공부가 필요합니다.

매개변수가 하나일때 ()괄호 생략가능, {} 소괄호 및 return도 생략가능합니다.

```
//es5
function sum (a,b){
	return a+b;
}

//es6
const sum = (a,b) => a+b;
```

 

3. Default parameter 추가

 <br>

화살표 함수로 함수를 작성하였으니 함수 관련 하나 더 하겠습니다. default parameter입니다.
기존에 함수의 매개변수에 초깃값을 작성하려면 함수 내부에서 로직이 필요했으나,

ES6 이후 default parameter가 추가되었습니다.

 <br>

```
//es5

var bmi = function(height, weight){
    var height = height || 184;
    var weight = weight || 77;
    return weight / (height * height / 10000);
}

//bmi에 키와 몸무게를 작성하면 bmi를 리턴해주는 함수작성 파라미터가 없을시 작성자의 bmi를 리턴

//es6

const bmi = function(height = 184, weight = 77){
	return weight / (height * height / 10000);
}
```

4. Templete literal 추가

 <br>

문자열 쪽으로 넘어가 보겠습니다. es6 이전 문자열 관리는 불편했습니다.temlplete literal이 도입된 후 간편해졌습니다. 사용법은 ``(back tic)입니다.

${} 중괄호 앞에 달러 표시를 통해 자바스크립트 표현식 삽입 가능합니다.

```
//es5
var first = 'heo'
var last = 'beomsung'
var name = 'My name is ' + first + ' ' + last + '.'


//es6
var name = `My name is ${first} ${last}.`
```

5. Multi-line string

 <br>

문자열이 라인을 넘어가게 되면 관리가 불편했습니다 백틱을 사용하게 되면 여러 라인의 문자열도 문제없습니다.

 

```
//es5
var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n ' +
'Aliquam ligula sapien, rutrum sed vestibulum eget, rhoncus ac erat.\n' +
'Aliquam erat volutpat. Sed convallis scelerisque enim at fermentum. Aliquam consectetur,\n' +
'est ac auctor iaculis, odio mi bibendum leo, in congue neque velit vel enim. \n' +
'Nullam vitae justo at mauris sodales feugiat. \n' +
'Praesent pellentesque ipsum eget tellus imperdiet ultrices.\n' +
'Sed ultricies nisi nec diam sodales fringilla. \n' +
'Quisque adipiscing cursus porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n' +
'Aliquam bibendum scelerisque elit, eu pharetra dui pulvinar eget. \n '+
'Nam mollis mauris id tellus ultricies at porttitor neque vulputate. \n' +
'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. \n'

//es6

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aliquam ligula sapien, rutrum sed vestibulum eget, rhoncus ac erat.
Aliquam erat volutpat. Sed convallis scelerisque enim at fermentum. Aliquam consectetur,
est ac auctor iaculis, odio mi bibendum leo, in congue neque velit vel enim.
Nullam vitae justo at mauris sodales feugiat.
Praesent pellentesque ipsum eget tellus imperdiet ultrices.
Sed ultricies nisi nec diam sodales fringilla.
Quisque adipiscing cursus porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aliquam bibendum scelerisque elit, eu pharetra dui pulvinar eget.
Nam mollis mauris id tellus ultricies at porttitor neque vulputate.
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`
```

 

6. 클래스

많은 객체 생성 방식 중 하나이며, 자바스크립트는 프로토타입 기반의 객체지향 프로그래밍이나

클래스 기반의 객체지향 프로그래밍에 익숙한 개발자들에 요청에 의해 생기지 않았나 추측합니다.

자바스크립트에서 클래스는 문법적 설탕이라는 생각이며, 자바스크립트에서 클래스는 함수라고 생각합니다

(생성자 함수)

다만, 생성자 함수와 동일하게 동작하지 않으며, 클래스가 엄격하며 호이스팅이 발생하지 않는 것처럼 동작하는 let, const 키워드처럼 동작하게 됩니다 자세한 내용은 클래스 글 참조

 <br>

7. 모듈

모듈이란, 재사용하기 위한 코드 조각을 뜻하며 세부사항은 캡슐화 시키고, API 부분만 외부에 노출시킨 코드들입니다.

사용법은

```
<script type="module" src="lib.mjs"></script>
<script type="module" src="app.mjs"></script>
```

type에 module을 추가하고, 파일 확장자를 mjs로 변경시키는 것입니다.

모듈은 모듈 스코프를 가지며, export import 키워드로 사용합니다.

 <br>

8. 디스트럭처링할당

디스트럭처링 이란, 비구조화, 파괴를 뜻하는 단어이며 크게 객체나 배열에서 주로 사용해서 개별 변수에 할당하는 것입니다.

방법은

```
//array 디스트럭처링
const arr = [1, 2, 3];
const [one, two, three] = arr;

//object 디스트럭처링
const obj = { firstName: 'Heo', lastName: 'Beomsung' };
const { lastName, firstName } = obj;
```

마치 우항에 존재하는 자료구조를 파괴하여 좌항에 있는 변수들에 각각 할당하는 듯한 내용을 보여주게 되는데

위의 예제에서 배열은 순서를 중요하게 여기게 되고, 객체는 키값을 중요하게 여겨 순서를 바꾸어도 동일하게 동작합니다.(값만 추출)

디스트럭처링 할당을 통해 우리는 자료구조에서 일부 또는 전체를 편리하게 사용할 수 있습니다.

 <br>

rest 와 spread문법도 추가되었는데 이를 같이 활용하여 가독성 높고 성능좋은 코드를 작성할 수 있습니다.

 <br>

9. 프로미스

 

비동기통신에 있어 기존에는 콜백 함수를 사용한 콜백 패턴을 사용하였습니다. 결과론적으로 콜백헬을 발생시켰습니다.

이를 해결하기 위해 프로미스가 도입되었고, 프로미스 후속처리 메서드를 통해 에러 처리를 효과적으로 할 수 있게 되었습니다.

자세한 내용은 프로미스 내용을 참조 바랍니다.