#include<stdio.h>
void bubblesort(int arr[], int n)
{
    int i, j, temp ;
    for ( i = 0; i < n-1; i++)
    {
        for ( j = 0; j < n-1-i; j++)
        {
            if (arr[j]>arr[j+1])
            {
                temp= arr[j];
                arr[j]=arr[j+1] ;
                arr[j+1]= temp ;
            }   
        }
    }    
}
int main()
{
    int arr[]={2,34,12,124,75,346,234}, n=sizeof(arr)/sizeof(int) ;
    bubblesort(arr, n);
    int i ;
    printf("Sorted array : ");
    for ( i = 0; i < n; i++)
    {
        printf("%d  ",arr[i]);
    }

    return 0 ;
}