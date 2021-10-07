#include<stdio.h>
#include<math.h>
void main()
{
    int n;
    printf("enter the number:");
    scanf("%d",&n);
    int c=0,v=n;
    while(v!=0)
    {
        c++;
        v=v/10;
    }
    
    int z,sum=0,x=n;
    while(x!=0)
    {
        z=x%10;
        sum=sum+pow(z,c);
        x=x/10;
    }
    if(n==sum)
    {
        printf("armstrong number");
    }
    else
    {
        printf("NOT an armstrong number");
    }
}
    

