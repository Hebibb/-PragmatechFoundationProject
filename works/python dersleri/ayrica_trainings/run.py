menu='''asagidaki emrlerden hansinin
daxil olunmagini isterdiniz
1:xercleri elave et
2:xercleri gor
3:programi terk et'''
xercler_toplusu=[]
while True:
    print(menu)
    elave= input("melumati elave et: ")
    if elave=='1':
        print('xercler elave edildi')
        xerc=input('neqederdir: ')
        xercler_toplusu.append(int(xerc))
        
    elif elave=='2':
        print('xercler goruldu')
    elif elave=='3':
        print('program bitdi')
        print(xercler_toplusu)
        break

        