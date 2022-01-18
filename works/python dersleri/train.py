a=11#variable
print(a)#runs it on screen
b=2.5
c=type(11)#type int
d=type(2.5)#float
print(d)#shows int
print(c)#shows float
e=type('1')#
print(type('1'))#str string
print('space','between')#common between two str make space for them in execution
a,b,c='true',True,12
print(a,b,c)#you can define different variables at once

#python list
mix=[2,75,'sufle','strange things',5>75] #list in python can have any data type
print(mix)
#we can change it 
mix[3]='qonaqlar'
print(mix)
#can slice it
print(mix[0:2])
#Statements
news='train'#this is called assignment statement
news_agency=['new jersey','new york','kentucky',\
    'california']#via (\) character you continue your code at new line
print(news_agency)
#also (),[],{} used for continuation
for i in range(1,25):
    print(i)
    if i==10:
        break
'''as;ljk;lk;lkdsaafff
k;uhkl[l'''#via triple quotes you can make comments as multiline
def vur(nomre): #def represents functions for python
    '''this is  docstring'''
    return 15*nomre
print(vur.__doc__)#this helps to show docstring in python interpreter

#VARIABLES AND CONSTANTS
time='5p.m'#variables declared simply by = character
print(time)
time="unknown"#variables can be changes whenever new value inputted
#CONSTANTS ARE MAINLY USED IN MODULES SO:
import module#imports module namely module.py created as another file train.py programming document
module.TURK#takes constant name TURK form module.py
print(module.TURK)
#actually there is no contants in python but in order to separate from variable you can write CONSTANTS as uppercases 
#LITERALS
adim='Hebib'#literal is data given in variable 
#TYPES OF LITERALS
#NUMERIC LITERAL
req1=15#this int
req2=1.25#float
req3=2.5e5#float that transfers '.' 5 times to write
print(req3)
#string literals
main='kaki da bu linre'#strings
char='C'#char string
multiline_str='''this is mine multistring'''
uni_code='90308uds'
#boolean
print(5>9)
#special literal none means there is no value in variable
#literal collections
#list
music_types=['pop','rock','hip-hop','RMB','bluse']#list is equivalent of arrays in javascript
mix_up=['1.45',True,'unclear',None]#list can have any type
print(mix_up[0:2])#you can slice list 
print(mix_up[2:])
music_types[2]='RAP'#YOU CAN ALTER VALUES IN LIST
print(music_types)
#TUPLE
charters=('dubai','new delhi','katmandu')#main difference is that you cannot change it
#string as lists
# adi='Naze nin'
# adi[3]='l'#strings are immutable you cannot change it like list
# print(adi)
# print((adi[3]))
#SET
""" set is unordered collection of unique values
which eliminated by set type when called"""
amper={2,44,687,234,235,678,455,643,234,2,235}
print(amper)
#[for list],(for tuple),{for set}
#sets are not support slicing
#DICTIONARY 
BOOKSTORE={'letters':'Napoleon','history':'tolstoy'}
print(BOOKSTORE['letters'])
#DATA CONVERSIONS
floating=float(34)
print(floating)
print(int(5>2))
#we also can change data collection
print(tuple(music_types))
#implicit data conversion
implicit=5+1.2456
print(type(implicit))#changes int to float while plus operation
print(type(123+"567"))
