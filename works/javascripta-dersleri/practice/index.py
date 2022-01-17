user=input('create username:')
password=input('create password:')
store_user=[]
store_password=[]
store_user.append(user)
store_password.append(password)
if user==''or password=='':
    print('melumat verilmeyib')
    
else:
    if user=='habib'  or password==456:
        print('xos gelmisiniz')
        store_user.append(user)
        store_password.append(password)
        print(store_user and store_password)
        
    else:
        print('siz bura girebilmezsiniz')    
