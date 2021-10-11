#include<stdio.h>
void swap( int *a, int *b)
{
    int temp= *a ;
    *a=*b ;
    *b=temp ;
}
int partition (int arr[],int lo, int hi)
{
   int i, j,pivot ;
   pivot=arr[hi] ;
   j= lo-1 ;
   for ( i = lo; i < hi; i++)
   {
       if (arr[i]<pivot)
       {
           j++;
           swap( arr+i, arr+j);
       }
   }
   swap(arr+j+1, arr+hi );
   return j+1;   
}
void quicksort(int arr[], int lo, int hi )
{
    if (lo<hi)
    {
        int p= partition(arr, lo,hi);
        quicksort(arr, lo, p-1);
        quicksort(arr, p+1, hi) ;
    }    
}
int main()
{
    int arr[]={27, 10, 36, 18, 25, 45}, n=sizeof(arr)/sizeof(int) ;
    quicksort(arr, 0, n-1 );
    int i ;
    printf(" Quick Sorted array : ");
    for ( i = 0; i < n; i++)
    {
        printf("%d  ",arr[i]);
    }
    return 0 ;
}