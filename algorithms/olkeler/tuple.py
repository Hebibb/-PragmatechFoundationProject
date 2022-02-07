tpl=(23,45,12,67)

def addToTuple(element):
  ls=list(tpl)
  ls.append(element)
  tpl2=tuple(ls)
  return tpl2

print(addToTuple('element'))
