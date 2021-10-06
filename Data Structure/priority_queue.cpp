// Program to implement Priority Queue in cpp.

#include<iostream>
using namespace std;

void insert_operation(int copy_pqueue[], int *rear_ptr)
{
    int a;
    if(*rear_ptr == 49)
    {
        printf("\nPRIORITY QUEUE OVERFLOW\n");
    }
    else
    {
        printf("ENTER THE ELEMENT TO INSERT :");
        scanf("%d",&a);
        copy_pqueue[*rear_ptr+1]=a;
        (*rear_ptr)++;
    }
}
void remove_operation(int copy_pqueue[], int *rear_ptr)
{
    int sm_index = 0;
    int sm_ele = copy_pqueue[0];
    int i;

    if(*rear_ptr == (-1))
    {
        printf("\n PRIORITY QUEUE UNDERFLOW \n");
    }
    else
    {
        for(i=1;i<=*rear_ptr;i++)
        {
            if(copy_pqueue[i] < sm_ele)
            {
                sm_ele = copy_pqueue[i];
                sm_index = i;
            }
        }

        printf("PRIORITY ELEMENT %d IS REMOVED FROM THE PRIORITY QUEUE\n",copy_pqueue[sm_index]);

        for(i=sm_index; i<*rear_ptr;i++)
		{
			copy_pqueue[i] = copy_pqueue[i+1];
		}
		(*rear_ptr)--;
    }
}

void display_operation(int copy_pqueue[], int rear_ptr)
{
    int i;
    if(rear_ptr == (-1))
    {
        printf("\n PRIORITY QUEUE IS EMPTY, NOTHING TO DISPLAY \n");
    }
    else
    {
        printf("\nPRIORITY QUEUE CONTAINS :\n");
        for(i=1;i<=rear_ptr;i++)
        {
            printf("%d\n",copy_pqueue[i]);
        }
    }
}

int main()
{
    int pqueue[50];
    int REAR = -1;
    int ch;

    do
    {
        printf("1-INSERT\n");
        printf("2-REMOVE\n");
        printf("3-DISPLAY\n");
        printf("4-EXIT\n");

        printf("PROVIDE YOUR CHOICE :");
        scanf("%d",&ch);

        switch(ch)
        {
            case 1: insert_operation(pqueue, &REAR);
            break;

            case 2: remove_operation(pqueue, &REAR);
            break;

            case 3: display_operation(pqueue, REAR);
            break;

            case 4: exit(0);
            break;

            default: printf("\n INVALID CHOICE \n");
        }
    }
    while(1);

    return 0;
}
