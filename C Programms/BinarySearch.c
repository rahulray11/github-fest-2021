#include<stdio.h>
void main()
{

    int n,temp;
    printf("enter number of elements:");
    scanf("%d",&n);
    int a[n];
    for(int i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    for(int j=0;j<(n-1);j++)
    {
        for(int i=0;i<(n-1-j);i++)
        {
            if(a[i+1]>a[i])
            {
                temp=a[i+1];
                a[i+1]=a[i];
                a[i]=temp;
            }
        }
    }
    for(int i=0;i<n;i++)
    {
        printf("%d ",a[i]);
=======
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
