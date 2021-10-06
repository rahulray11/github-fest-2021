#include<stdio.h>   
int main()  
{  
    int a[10] = {10, 23, 40, 1, 2, 0, 14, 13, 50, 9};  
    int m, i,x;  
    printf("\nEnter Item which is to be searched\n");  
    scanf("%d",&m);  
    for (i = 0; i< 10; i++)  
    {  
        if(a[i] == m)   
        {  
            x = i+1;  
            break;  
        }   
        else   
        x = 0;  
    }   
    if(x != 0)  
    {  
        printf("\nItem found at location %d\n",x);  
    }  
    else  
    {  
        printf("\nItem not present\n");   
    }  
}   
