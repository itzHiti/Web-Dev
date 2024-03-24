# A

N = int(input())
arr = list(map(int, input().split()))

for i in range(0, N, 2):
    print(arr[i], end=' ')

# B

N = int(input())
arr = list(map(int, input().split()))

for num in arr:
    if num % 2 == 0:
        print(num, end=' ')

# C

N = int(input())
arr = list(map(int, input().split()))

count = 0
for num in arr:
    if num > 0:
        count += 1

print(count)

# D

N = int(input())
arr = list(map(int, input().split()))

count = 0
for i in range(1, N):
    if arr[i] > arr[i-1]:
        count += 1

print(count)

# E

N = int(input())
arr = list(map(int, input().split()))

for i in range(1, N):
    if arr[i] * arr[i-1] > 0:
        print("YES")
        break
else:
    print("NO")