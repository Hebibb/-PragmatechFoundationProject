# Complete the solve function below.
def solve(s):
    if s.istitle()==False:
        return s.title()
if __name__ == '__main__':
    s = input()
    result = solve(s)
    print(result)

 