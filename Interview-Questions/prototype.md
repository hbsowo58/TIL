# prototype

자바스크립트는 명령형, 함수형, 프로토타입 기반의 객체지향 프로그래밍입니다.

대표적인 차이인 클래스 기반의 객체지향 프로그래밍과 다르게 '프로토타입' 기반의 객체지향 프로그래밍이며

자바스크립트를 이루고 있는 모든 것은 거의 객체입니다.

객체지향 프로그래밍이란, 실세계의 실체를 속성을 통해 인식하거나 구별하는 철학적인 사고를 프로그래밍에 접목하였습니다.

특정한 속성을 추상화하여 필요한 속성만을 찾아냅니다.

객체는 상태 와 동작을 논리적인 단위로 묶는 자료구조입니다.

 <br>

객체지향 프로그래밍의 장점이자 특징 중 하나인 상속은 프로퍼티, 또는 메서드를 다른 객체가 받아서 사용할 수 있는 것입니다.

프로토타입 객체를 통해 상속을 구현하며 프로토타입이란, 어떠한 객체의 '부모'(상위) 객체 역할을 하는 객체입니다.

1. 모든 객체는 __proto__ 접근자 프로퍼티를 통해 자신의 부모(상위) 객체에 간접적인 접근이 가능합니다.
   => 직접접근 말고 간접적인 접근을 하는 이유는 상호 참조 방지입니다.

2. 함수 객체만이 가지는 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토 타입을 가리킵니다.

3. prototype의 constructor 프로퍼티와 생성자 함수 모든 prototype은 constructor을 가지며 constructor

프로퍼티는 prototype 프로퍼티로 자신을 참조하고 있는 생성자 함수를 가리킵니다.

오버라이딩(overriding) 상위 클래스가 가지고 있는 메서드를 하위 클래스가 재정의하여 사용하는 방식입니다.

오버 로딩(overloading) 함수의 이름은 동일하지만 매개변수의 타입 또는 개수가 다른 메서드를 구현하고 매개변수에 의해 메서드를 구별하여 호출하는 방식입니다.

자바스크립트는 오버 로딩을 지원하지 않지만 arguments 객체를 사용하여 구현할 수는 있습니다.

<br>

[원본](https://hbsowo58.tistory.com/395?category=786659)