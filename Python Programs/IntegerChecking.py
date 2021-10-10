#Python Code to check that integer is positive,zero or negative integer
num = int(input("Enter Any Number of Your Choice: "))
if num < 0:
    print(num," is Negative Number")
elif num == 0:
    print(num," is Zero")
else:
    print(num," is Positive Number")
