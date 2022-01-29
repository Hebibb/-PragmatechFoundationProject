from flask import Flask, render_template
app=Flask(__name__)
@app.route('/')
def mytask():
    return render_template('index.html')
@app.route('/mat')
def mytask():
    num1=random.randint(0,100)
    num2=random.randint(0,100)
    return render_template('matematika.html',num1=num1,num2=num2)

if __name__=='__main__':
    app.run(port=5000,debug=True)