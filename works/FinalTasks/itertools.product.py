from itertools import product
firstA=int(input())
secondA=int(input())
firstB=int(input())
secondB=int(input())
A=[firstA, secondA]
B=[firstB, secondB]
seqprod=list(product(A,B))
print(*seqprod,sep=', ')

# list(product([1,2,3],repeat = 2))
# *A,sep=','