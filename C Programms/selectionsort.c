#include<stdio.h>
void selectionsort(int arr[], int n)
{
    int i,j, temp,min ;
    for ( i = 0; i < n-1; i++)
    {
        min= i;
        for (j = i; j < n; j++)
        {
            if (arr[min] >arr[j])
            {
                min= j;
            }
        }
        temp=arr[min];
        arr[min]=arr[i];
        arr[i]= temp ;  
    }  
}
int main()
{
    int arr[]={33, 89, 54, 53, 796, 1009, 57, 73, 259, 374}, n=sizeof(arr)/sizeof(int) ;
    selectionsort(arr, n);
    int i ;
    printf("Sorted array : ");
    for ( i = 0; i < n; i++)
    {
        printf("%d  ",arr[i]);
    }
    return 0 ;
}