from flask import Flask,render_template
#first we have to create envirovment for flask by rendering following sequence of commands in terminal
#1)py venv env(creates env enviroment in current direcory )
#2). env/Scripts/activate (activates env)
#3)pip install flask (installs flask packages to env)
#then you can import flask
app=Flask(__name__)#This is needed so that Flask knows where to look for resources such as templates and static files.this is argument of flask class
articles=[
    {
        'author':'Lev Tolstoy',
        'title':'War and Peace',
        'type':'novel',
        'age':'1800-1850',
        'Explanation':'The main character in novel is Hippolyte'},
    {
        'author':'Dostoyevski',
        'title':'Crime and Punishment',
        'type':'novel',
        'age':'1860-1900',
         'Explanation':'The main character in novel is Roskolnikov'
        }
    
]


@app.route("/")
@app.route('/Home')
def Home():
    return render_template('home.html',articles=articles)#to work with html you have to place html file in templates folder in current directory
@app.route("/about")
def about():
    return render_template('about.html',)

if __name__=='__main__':
    app.run(debug=True)





# this route decorator tells our flask what function it have to commit in url#A decorator in Python is a function that takes another function as its argument,
# and returns yet another function. Decorators can be extremely useful as they allow the extension
# @app.route('/')# of an existing function(Flask in this example), without any modification to the original function source code.
# def hello_world():#The function returns the message we want to display in the user’s browser
#     return 'Hello world'
# @app.route("/second_section")#give dynamic actions on url
# def func():
#     return 'section'
# @app.route('/users/<username>')#gives variable in url to give your name
# def userler(username):
#     return  "Salam "+username
    
# if __name__=='__main__':
#     app.run(debug=True)#By enabling debug mode, the server will automatically reload if code changes, and will show an interactive debugger in the browser if an error occurs during a request.
