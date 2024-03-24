# A

num1 = int(input())
num2 = int(input())

if num1 > num2:
    print(num1)
else:
    print(num2)


# B

year = int(input())

if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
    print("YES")
else:
    print("NO")


# C

answer_testing_system = int(input())
answer_student = int(input())

if answer_student == 1:
    print("YES")
else:
    print("NO")


# D

x = int(input())

if x > 0:
    print(1)
elif x < 0:
    print(-1)
else:
    print(0)


# E

num1 = int(input())
num2 = int(input())

if num1 > num2:
    print(1)
elif num1 < num2:
    print(2)
else:
    print(0)