#Fibonacci

num=int(input("Enter num\n"))

count=0

sum=0

num1=0

num2=1

print(num1,num2,'',end='')

while count<=num:

    sum=num1+num2

    print(sum,'',end='')

    num1,num2=num2,sum

    count+=1

    
