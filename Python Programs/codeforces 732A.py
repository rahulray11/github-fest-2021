# https://codeforces.com/problemset/problem/732/A
k,r = map(int,input().split())
for i in range(1,10):
    if i * k % 10 in [0, r]:
        print(i)
        break
