arr=['Samir','Mehemmed','Qurbani','Vesile','Qurbaneli','Memmedaga','Nurlan','Leman','Emil','Gulshen']
wordsum=len(arr)
print(f'arr listindeki sozlerin sayi {wordsum}-a qederdir.')#1ci tapsiriq
hesabla=str(arr)
arrsozler=len(hesabla)
elavesimbollar=[',',"'","[","]"]
vergul=hesabla.count(elavesimbollar[0])
apostrof=hesabla.count(elavesimbollar[1])
solmoterize=hesabla.count(elavesimbollar[2])
sagmoterize=hesabla.count(elavesimbollar[3])
excessymobls=vergul+apostrof+solmoterize+sagmoterize
print(f'arr listindeki herflerin sayi {arrsozler-excessymobls}-e beraberdir.')#2-ci
uzunsoz=max(arr, key=len)
yeri=arr.index(uzunsoz)+1
print(f'en uzun soz  {uzunsoz}-dir ve {yeri}-ci siradadir')#3-cu
x=0
for x in arr:#4cu tapsiriq
    if 'm' in x:
        print(x)
lox=arr.copy()       

salam=arr.append(lox)
print(salam)

    
    
    




# arrs="'Samir','Mehemmed','Qurbani','Vesile','Qurbaneli','Memmedaga','Nurlan','Leman','Emil','Gulshen'"
# ar=['samir','hekim']
