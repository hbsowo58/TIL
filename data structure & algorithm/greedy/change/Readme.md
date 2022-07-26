V1

```
input = 1260
arr = [500,100,50,10]
result = 0

for i in arr:
    count = int(input/i)
    input = input - (count * i)
    if(count >= 1):
        result = result + count

print(result)
```
거스름돈 1260원중, 500원 100원 50원 10원짜리로 "최소"개수 거스름돈을 남기는 문제

가장 큰 단위인 500원부터, 개수를 확인후 정수부분만 추출한 후 input값에서 차감합니다

단위 금액보다 작을 수 있으므로, 1개 이상인 경우에만 동전의 결과에 추가합니다.

---

V2

```
n = 1260
count = 0

coin_types = [500, 100, 50, 10]

for coin in coin_types:
    count += n // coin
    n %= coin

print(count)
```

결과에 input을 단위로 나누고 남은 정수값을 넣고, 인풋에는 단위값으로 나눈 나머지만 남깁니다

나머지 연산자(%)와 // 연산에 대한 정보가 있었으면 가독성이 증가헀을 것 같습니다.
