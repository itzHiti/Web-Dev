import math

# A

a = int(input())
b = int(input())

c = math.sqrt(a**2 + b**2)

print(c)

# B

d = int(input())

print("The next number for the number ",d," is ",d+1,".",sep="")
print("The previous number for the number ",d," is ",d-1,".",sep="")

# C

e = int(input())
f = int(input())

print (f//e)

# D

print (f%e)

# E

g = int(input())
h = int(input())

position = (g * h) % 109
print(position)