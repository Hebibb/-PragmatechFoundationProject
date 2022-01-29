class myklass:
    def __init__(self,ptype,pyear):
        self.printer_type=ptype
        self.printer_year=pyear
       #let's creat method in class
    def myfunc(self):#you can give self other names, if it is represtents
        return print(f'hello this is {self.printer_type} {self.printer_year}')
    
    
# --------------------------------------------------------------------------------------------------------------------------------------------#
                # INHERITANCE

myprinter=myklass('Soner', '2016')
print(f'printer is {myprinter.printer_type}')
myprinter.myfunc()
mycar=myklass('SUV', '2018')
mycar.myfunc()
class Person:#name of class have to be uppercase
    def __init__(self,name,surname):
        self._name=name
        self._surname=surname
    def printname(self):
        print(self._name+" "+self._surname)
myFullname=Person('Habib', 'Babayev')
f"My fullname is {myFullname.printname()}"

class Student(Person):#class student inherits all the parameters and methods from parent class of Person
    pass#if you do not want to add any additional property to class use pass command

pupilfname=Student('Qara', 'Qarayev')
pupilfname.printname()

# -----------------------------------ADDING INIT FUNCTION TO CHILD CLASS----------------------------------------------
class Student(Person):
    def __init__(self, primat, predator):#through init function we ignored inheritance from person class
        self._primat=primat
        self._predator=predator
    def classification(self):
        print(f'{self._predator} eats {self._primat}')
        
animals=Student('Monkey', 'Lion')
animals.classification()

    
        


    