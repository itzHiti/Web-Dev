#sWAP cASE
def swap_case(s):
    res = []
    for i in s:
        if i >= 'a' and i <= 'z':
            res.append(i.upper())
        elif i >= 'A' and i <= 'Z':
            res.append(i.lower())
        else:
            res.append(i)
    return ''.join(res)

if __name__ == '__main__':
    s = input()
    result = swap_case(s)
    print(result)