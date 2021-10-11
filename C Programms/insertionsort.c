#include<stdio.h>
void insertionsort(int arr[], int n)
{
    int i,j,temp ;
    for ( i = 1; i < n; i++)
    {
        temp= arr[i];
        j=i-1 ;
        while (j>=0 && temp<arr[j])
        {
            arr[j+1]= arr[j];
            j--;
        }
        arr[j+1]= temp;
    }
}
int main()
{
    int arr[]={2,34,12,124,75,00, 'a',23,4657,346,234}, n=sizeof(arr)/sizeof(int) ;
    insertionsort(arr, n);
    int i ;
    printf("Sorted array : ");
    for ( i = 0; i < n; i++)
    {
        printf("%d  ",arr[i]);
    }
    return 0 ;
}