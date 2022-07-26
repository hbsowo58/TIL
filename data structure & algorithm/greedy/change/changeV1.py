input = 1260
arr = [500,100,50,10]
result = 0

for i in arr:
    count = int(input/i)
    input = input - (count * i)
    if(count >= 1):
        result = result + count

print(result)
