def mutate_string(string, position, character):
    l=list(string)
    l[position]=character
    string=''.join(l)
    
    return print(string)

mutate_string(string=input(), position=int(input()), character=input())


# if __name__ == '__main__':
#     s = input()
#     i, c = input().split()
#     s_new = mutate_string(s, int(i), c)
#     print(s_new)a