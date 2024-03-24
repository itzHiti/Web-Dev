# A

a = int(input())
b = int(input())

for num in range(a, b+1):
    if num % 2 == 0:
        print(num, end=' ')
        
# B

a = int(input())
b = int(input())
c = int(input())
d = int(input())

for num in range(a, b+1):
    if num % d == c:
        print(num, end=' ')
        
# C

a = int(input())
b = int(input())

for num in range(a, b+1):
    if int(num ** 0.5) ** 2 == num:
        print(num, end=' ')
        
# D

x = int(input())
d = int(input())

count = 0
while x > 0:
    if x % 10 == d:
        count += 1
    x //= 10

print(count)

# E

x = int(input())

sum_digits = 0
while x > 0:
    sum_digits += x % 10
    x //= 10

print(sum_digits)

# F

x = int(input())

reversed_num = 0
while x > 0:
    reversed_num = reversed_num * 10 + x % 10
    x //= 10

print(reversed_num)

# G

x = int(input())

for num in range(2, x+1):
    if x % num == 0:
        print(num)
        break

# H

x = int(input())

for num in range(1, x+1):
    if x % num == 0:
        print(num, end=' ')