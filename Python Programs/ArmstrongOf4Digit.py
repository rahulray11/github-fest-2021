#Armstrong number 153=>(1*1*1)+(5*5*5)+(3*3*3)=153
# Python code to find 4 digit armstrong Number
number = int(input("Enter a Number: "))
sum = 0
a = number
while a > 0:
    value = a % 10
    sum += value ** 4 # for 3 digit change value to 3
    a //= 10
if number == sum:
    print(number,"is Armstrong Number")
else:
    print(number,"is not Armstrong Number")
