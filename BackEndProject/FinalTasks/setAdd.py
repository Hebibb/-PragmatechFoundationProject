N=int(input())
country_list=[]
for i in range(0,N):
    i=input()
    country_list.append(i)
country_set=set(country_list)
print(len(country_set))