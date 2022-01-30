import math
import os
import random
import re
import sys



if __name__ == '__main__':
    n = int(input().strip())
    a='Weird'
    b='Not Weird'
    if n%2==1:
        print(a)
    if n%2==0:
        if 2<=n<=5:
            print(b)
        if n>20:
            print(b)
        