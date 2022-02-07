from re import I
from olkeler import countries

def FindCountry(countryname):
    print(countries.get(countryname))
    pass
# olke adi daxil edildiyi zaman o olkeye aid olan seherlerin adlarini ekranda gostersin

FindCountry('Afghanistan')



def CityCountMax():
  Countries_l = list(countries.keys())
  cities_l = list(countries.values())
  countcity=[]
  maxcity=0
  for x in range(len(cities_l)):
    countcity.append(len(cities_l[x])) 
    maxcity=max(countcity)   
    maxindex = countcity.index(maxcity) 
  print(Countries_l[maxindex])

CityCountMax()

def CountAllCities():
    new=countries.values()
    a=0
    for i in new:
        a+=len(i)
    print(a)
  # butun seherlerin sayini ekranda gostersin
    pass
CountAllCities()
