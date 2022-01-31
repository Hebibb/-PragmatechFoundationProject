n=int(input())
s=set(range(0,n))

N=int(input())


for i in range(0,N):
    command=f'{input()}{i}'
    commandvalue1=f'remove {i}'
    commandvalue2=f'discard {i}'
    commandvalue3='pop'
    remove=s.remove(i)
    discard=s.discard(i)
    pop=s.pop
    commands=[remove,discard,pop]

    if command==commandvalue1:
        commands[0]
        
    if command==commandvalue2:
        commands[1]
    if command==commandvalue3:
        commands[2]
print(s)

    