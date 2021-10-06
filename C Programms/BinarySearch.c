#include<stdio.h>
void main()
{
    int a[5],n,first,c=0,last,mid;
    for(int i=0;i<5;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("enter the element you want to scan:");
    scanf("%d",&n);
    first=0;
    last=n-1;
    while(first<=last)
    {
        mid=((first+last)/2);
        if(n==a[mid])
        {
            c=1;
            break;
        }
        else if(n>a[mid])
            {
                first=mid+1;
            }
        else
        {
            last=mid-1;
        }
    }
    if(c==1)
    {
        printf("element found at position %d",(mid+1));
    }
    else
    {
        printf("element not found");
    }
}
