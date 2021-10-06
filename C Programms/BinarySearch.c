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
    }
}
