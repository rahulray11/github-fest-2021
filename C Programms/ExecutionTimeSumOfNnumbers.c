/*Sum of 1 to N number without for loop and find out the runtime for that */
#include<stdio.h>
#include<conio.h>
#include<time.h>
int count = 0;
int sum(int n)
{
    int i=1;
    while(i<=n)
    {
        count = count+i;
        i++;
    }
    return count;
}
int main()
{
    int n;
    clock_t t;
    t = clock();
    printf("Enter the value of N:");
    scanf("%d",&n);
    sum(n);
    t = clock() - t;
    double time_taken=((double)t)/CLOCKS_PER_SEC;
    printf("Sum = %d\n",count);
    printf("Function took %f seconds to execute\n",time_taken);
    return 0;
}
