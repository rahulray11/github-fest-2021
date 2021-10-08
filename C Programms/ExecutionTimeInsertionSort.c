// Insertion Sort with Execution Time in C
#include <math.h>
#include <stdio.h>
#include<time.h>

void insertionSort(int arr[], int n)
{
    int i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

void printArray(int arr[], int n)
{
    int i;
    for (i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");
}

int main()
{
	clock_t start,end;
	double cpu_time_used;

    int arr[] = { 99,40,67,33,2 };
    printf("Old Array:- 99 40 67 33 2\n");
    int n = sizeof(arr) / sizeof(arr[0]);
	start = clock();
    insertionSort(arr, n);
    printf("Sorted Array:- ");
    printArray(arr, n);
    end = clock();
    cpu_time_used = ((double)(end - start))/CLOCKS_PER_SEC;
    printf("Execution Time:- %lf",cpu_time_used);

    return 0;
}
