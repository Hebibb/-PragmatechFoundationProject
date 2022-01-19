import datetime
cat_menu='''xahis olunur asagidaki
kateqoriyalardan birini secin'''
categories={1:'kommunal',2:'geyim',3:'yemek',4:'benzin',5:'tehsil'}

while True:
    print(cat_menu)
    tutar=input('xercinizi elave edin:')
    reqem_tutari=int(tutar)
    index_of_tutar=input('xerc kateqoriyanizi secin: ')
    il=input('ili secin:')
    ay=input('ayi secin: ')
    gun=input('gunu secin:')
    tarix=datetime.datetime(int(il), int(ay), int(gun))
    kat_secim=categories[int(index_of_tutar)]
    Melumat=print(f'Siz {tarix} tarixinde {kat_secim} ucun {reqem_tutari} AZN miqdarinda pul xerclemisiniz')
    