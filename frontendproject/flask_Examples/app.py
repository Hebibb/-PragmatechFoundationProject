from flask import Flask,render_template,request

app= Flask(__name__)

class Skills:
    def __init__(self,_icon,_skillName,_content):
        self.icon=_icon
        self.skillName=_skillName
        self.content=_content
skill_list=[
    Skills(
        'fal fa-tv',
        'Web Design', 
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, saepe libero ullam quisquam unde incidunt nostrum. Magni'
        ),
    Skills(
        'fal fa-palette',
        ' Sketching', 
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, saepe libero ullam quisquam unde incidunt nostrum. Magni'
        ),
    Skills(
        'fal fa-hand-holding-usd',
        'Selling', 
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, saepe libero ullam quisquam unde incidunt nostrum. Magni'
        ),
    Skills(
        'fal fa-lightbulb-on',
        'Marketing', 
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, saepe libero ullam quisquam unde incidunt nostrum. Magni'
        ),
    Skills(
        'fal fa-hands-helping',
        'Support', 
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, saepe libero ullam quisquam unde incidunt nostrum. Magni'
        ),
    Skills(
        'fab fa-connectdevelop',
        ' Development', 
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, saepe libero ullam quisquam unde incidunt nostrum. Magni'
        )
]
class Ourteam:
    def __init__ (self,_images,_name,_profession):
        self.images=_images
        self.name=_name
        self.profession=_profession
        
ourteam_list=[Ourteam(
    "static/images/team-2.jpg",
    'JOHN DOWE',
    'Front-end'),
    Ourteam(
    "static/images/team-3.jpg",
    "NATALY JAN",
    'Front-end'),
    Ourteam(
    "static/images/team-1.jpg",
    "JULIETTE SWIFT",
    'Front-end') ]
      
class GetInTouch:
    def __init__(self,_address,_addConten1,_addConten2):
        self.address=_address
        self.addContent1=_addConten1
        self.addContent2=_addConten2

GetinTouch=[
    GetInTouch(
        'ADDRESS STREET',
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.'),
     GetInTouch(
        'NUMBER PHONE',
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.'),
      GetInTouch(
        'CITY NUMBER',
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.'),
      GetInTouch(
        'ADDRESS EMAIL',
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.')
]   
class connect:
    def __init__(self,_mobile,_email,_location):
        self.mobile=_mobile
        self.email=_email
        self.location=_location
        
Connection=[
    connect(
        'Hotline (+994) 50 764 36 26',
        'bhabib95@gmail.com',
        'location')
 
]
        
users=[]
@app.route("/",methods=['GET','POST'])
def index():
    if request.method=='POST':
        _ad=request.form['ad ']
        _soyad=request.form['soyad ']
        _telefon=request.form['telefon ']
        _email=request.form['email ']
        _message=request.form['message ']
        user={
            'ad':_ad,
            'soyad':_soyad,
            'telefon':_telefon,
            'email':_email,
            'message':_message,
        }
        users.append(user)
        return render_template('admin/add.html',istifadeciler=users)
    return render_template('app/index.html', skill_list=skill_list, ourteam_list=ourteam_list)

@app.route("/admin",methods=['GET','POST'])
def admin_index():
    return render_template('admin/index.html')


if __name__=='__main__':
    app.run(debug=True)
