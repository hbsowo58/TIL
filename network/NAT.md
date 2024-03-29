# NAT

공통) 

IP = 전화의 전화번호처럼 인터넷의 주소

서비스 = 서버가 네트워크에 제공



### 정의

NAT : Network address translation => 네트워크 주소 변환 => 네트워크 주소를 'IP'로 이해

라우터에서 사용되는 서비스 => 라우터를 공유기로 이해



IP 주소 집합 => 다른 IP 주소 집합 변환하는 기술

여러 개의 호스트가 하나의 공인 IP를 사용해 인터넷에 접속하는 기술



### 필요 이유

제한된 양의 공인 IP 보존(IPV4의 한계) 2^32를 보완 (약 42억 개)

->금전적인 이유

### 장점

1) 호스트당 각각 IP를 부여하지 않아도 됨

2) 보안 (외부/내부 IP가 나뉘어 접근의 어려움)



### 종류

static NAT : 공인 IP와 내부 IP가 1:1로 대응합니다

장점) 외부에서 공인 IP 접근 가능합니다.

단점) 주소 절약에 도움이 되지 않습니다.



dynamic NAT: 내부 호스트의 수가 많을 때 N:1로 대응합니다.

IP Pool 방식입니다 (IP의 그룹) => 고갈 시 사용 불가

=> 저희가 이 방식을 사용하고 있는 게 아닐까 추측합니다.

주로 회사, 학원, 학교 등에서 사용한다고 합니다.



NAPT

PAT



N:N 방식인 것 같은데 이해가 잘 가지 않습니다.



### 결론

제 PC 기준 공인 IP는 xxx.xxx.xxx.xxx이며 (github 비공개)

개인 IP는 192.168.0.48입니다. (변화 가능)

기본 IP는 192.168.0.1이며 제 IP는 192.168.0.2 ~ 192.168.0.255까지 가능할 듯합니다.

-> 초과되면 사용 불가능할듯하며, IP를 부여하는 방식에서 불편함을 느껴서

DHCP가 등장했다고 추측합니다.



또한 내부 IP에서 외부 IP를 거쳐 같은 곳에 요청하게 될 때 문제가 발생할 수 있는데 이를 해결하기 위해 NAPT로 포트까지 변경해서 전송.



NAT를 통해 적은 IP를 활용하였으나, 미래(현재 포함) IPv6가 대중화되면, NAT의 필요성이 떨어질 수 있다.





# DHCP

### 정의

Dynamic Host Configuration protocol 동적 호스트 구성 프로토콜(약속, 규약)



네트워크 호스트의 IP 주소 등을 자동적으로 일정 기간 임대해 주는 프로토콜 (UDP 베이스 신뢰 ↓ 성능 ↑)

호스트 IP를 구성 관리를 단순화하는 IP 표준



BOOTP의 대안



과정 임대, 갱신, 반환

임대 과정 :DORA => Discover, offer, Request, Ack

갱신 과정: Reqeust, Ack => 50%, 87.5% 때 갱신을 시도

반환 과정:세 가지 중 가장 중요 반환이 없다면 고정 IP 방식보다 안 좋음



### 필요이유

과거에는 라우터가 호스트들에게 고정 IP를 설정하였다 -> 실수가 발생한다면 인터넷이 안된다, 또한 IP가 모자랄 수 있다.



### 장점

PC수가 많은 경우 IP를 자동 설정(IP 충돌방지)



단점으로는 서버에 의존하여 서버가 다운시 IP할당이 불가능하며, PC OFF시 Lease Time까지 IP주소 1개 낭비

### 종류

DHCP 서버

DHCP 클라이언트

DHCP Relay Agent

DHCP Snooping

DHCP proxy agent

### 결론

DCHP는 IP를 빌려주는 개념으로, 기간이 존재하며(보통 8일) 가정이나 기업은 8~30일을 추천합니다.

유동인구가 많으면 2~3시간 정도를 추천하며 IP TIME 공유기의 경우 기본이 2시간입니다.

랜선이 꽂혔는데 인터넷이 안되는 경우 가장 먼저 해볼 명령어는 ipconfig /releasse, ipconfig /renew입니다.

국내 ISP 사는 KT, SKT 브로드밴드 등이 존재하며 ISP 사에서 네트워크 관리자에게 IP를 부여하고

라우터를 통해 개인 PC, 핸드폰 등으로 DCHP를 통해 동적으로 IP를 부여한다는 것을 배웠습니다.

