# scheduler_process structure_context switching

저번시간 복습 

<br>

라이브러리/함수

SYSTEM CALL

커널

HW

---

스케쥴러 = 프로세스의 실행을 관리

FIFO 스케쥴러 가장 간단한 스케쥴링 직관적

SJF 가장 실행시간이 짧은 프로세스 부터 실행 -> RTOS (RealTime OS) <-> GPOS(General Purpose OS)

<br>

우선 순위 기반 스케쥴러

Priority-Based 스케쥴러

정적 우선순위 : 프로세스마다 우선 순위를 미리 지정

동적 우선순위 : 스케쥴러가 상황에 따라 우선순위를 동적으로 변경

<br>

프로세스 구조

text(CODE)코드

data: 변수/초기화된 데이터

stack:임시 데이터(함수 호출, 로컬 변수)

heap:코드에서 동적으로 만들어지는 데이터

<br>

컨텍스트 스위칭(우리나라 말 문맥교환)

CPU에 실행할 프로세스를 교체하는 기술

<br>

프로세스 구조에 대해 설명(코드/데이터/스택/힙)

컨텍스트 스위칭에 대해 설명(지금 동작하는 프로세스의 sp,pc를 pcb에 저장,

그다음에 동작할 프로세스의 pcb에서 sp와 pc를 꺼내온다)

프로세스간에는 어떻게 통신하는지 설명(프로세스간에 통신이 안되기에ipc라는 기술을 사용

커널을 이용하는 것이다)

<br>