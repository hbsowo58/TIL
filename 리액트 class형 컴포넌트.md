리액트 라이브러리를 학습하면서 컴포넌트를 만드는 방식은 _두 가지_ _알고 있다_ class, hooks

공통적으론 import React from "react";

_class 방식에선_

class _컴포넌트명_ extends Component {} 방식과

class _컴포넌트명_ extends React.Component

_두 가지_ 방법을 사용했다.

차이라면 _import 문에_ {} 디스트럭처링 방식으로 component를 _넣냐 마냐만_ _알고 있었는데,_

React.PureComponent 방식으로 컴포넌트를 _생성 시_ _state 값을_ 기존의 state와 비교하여 변화가 _발생하였을 때만_ _렌더링 한다는_ 정보를 _얻게 되었다._

정보가 사실이라면, 리액트 라이브러리는 _state 값을_ 주시하고 있다가 '변화'가 _생겼을 시_ 자동으로 _렌더링 한다는_ 느낌으로 _알고 있었는데_ 렌더링을 최소화할 수 있는 컴포넌트 _생성 방식을_ 알아낸 것이다

_예를 들어_ 카운터 예제에서 state에 0이 있다면, 기존 컴포넌트 방식으로는 0이 0으로 _재할당되어도 렌더링이 되는 걸로_ _알고 있는데,_ _PureComponent 방식을_ 사용한다면 1이든 -1이든 변화가 _생겼을 때_ _렌더링 되어_ 성능이 좋아질 것으로 생각된다.

확인은 더 필요하다

```react
import React from "react"; // 공통

import React, { Component } from "react";
class App extends Component {}

import React from "react";
class App extends React.Component {}

import React from "react";
class App extends React.PureComponent {}
```
