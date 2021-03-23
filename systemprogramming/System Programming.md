# System Programming

intro

리눅스 시스템 프로그래밍이란?

라이브 프로그래밍: 준비된 예제 x 빈파일에서 구현 & 테스트

<br>

파일에 대한 다양한 주제 

hardlink, softlink, 메모리 매핑

<br>

### 실습 환경 구성(가상머신)

PC에 리눅스 설치 OR 가상 머신에 리눅스 설치

<br>

가상머신 : 컴퓨터안에 또다른 컴퓨터를 만드는것 '실제' x 가상 o -> 그래서 가상머신이라고 표현



















---

IPC 프로그래밍

IPC -> Inter Process Communication

-프로세스간 통신(프로세스들이 데이터를 주고받는 행위 또는 방법, 경로)

<br>

IPC 형태 3가지 분류

1.Data transfer -> 직접 프로세스간 데이터 전송

2.Shared memory -> 메모리 자체를 공유

3.Synchronization -> 동기화(순서,규칙에 맞게 공유된 리소스들을 사용한다)