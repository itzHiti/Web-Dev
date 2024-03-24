# A
def squares(N):
    i = 1
    while i*i <= N:
        print(i*i)
        i += 1

# B
def smallest_divisor(N):
    i = 2
    while N % i != 0:
        i += 1
    print(i)

# C
def powers_of_two(N):
    i = 1
    while i <= N:
        print(i)
        i *= 2

# D
def is_power_of_two(N):
    i = 1
    while i < N:
        i *= 2
    print("YES" if i == N else "NO")

# E
def smallest_k(N):
    i = 1
    k = 0
    while i < N:
        i *= 2
        k += 1
    print(k)