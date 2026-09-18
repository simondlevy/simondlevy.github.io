#!/usr/bin/env python3
'''
Memoization demonstration with Fibonacci function

Copyright (c) 2026 Simon D. Levy

MIT License
'''

from time import time

def fib_slow(n):
    return 1 if n <= 2 else fib_slow(n - 1) + fib_slow(n - 2)

def fib_fast(n):
    cache = dict()
    def fib_fast(n):
        if n == 1 or n == 2: 
            return 1
        elif n in cache:
            return cache[n]
        else:
            value = fib_fast(n - 1) + fib_fast(n - 2)
            cache[n] = value
            return value
    return fib_fast(n)

def fib_loop(n):
    s = 0
    if n <= 2:
        return 1
    prev1 = 1
    prev2 = 1
    for k in range(n-2):
        s = prev1 + prev2
        prev1, prev2 = prev2, s
    return s
        

N = 35

start = time()
print(fib_slow(N))
print(time() - start)
print()      
start = time()
print(fib_fast(N))
print(time() - start)
print()
start = time()
print(fib_loop(N))
print(time() - start)

