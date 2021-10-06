#include<stdio.h>
void main()
{
    int a,b,next,n,i;
    printf("enter number of terms");
    scanf("%d",&n);
    a=0;
    b=1;
    for(i=1;i<=n;i++)
    {
        next=a+b;
        a=b;
        b=next;
        printf("%d ",a);
        
    }
}
