// Program to implement Queue in cpp.

#include<stdio.h>
#include<stdlib.h>
#include<iostream>

using namespace std;

int queue[10];
int REAR = -1;
int FRONT = 0;
void insert_ele()
{
    int a;
    if(REAR == 9)
    {
        printf("QUEUE OVERFLOW\n\n");
    }
    else
    {
        printf("ENTER THE ELEMENT TO INSERT :");
        scanf("%d",&a);
        queue[REAR + 1] = a;
        REAR++;
    }
}

void remove_ele()
{
    int a;
    if(FRONT == (REAR+1))
    {
        printf("QUEUE UNDERFLOW\n");
    }
    else
    {
        printf("FRONT ELEMENT %d IS REMOVED FROM QUEUE\n",queue[FRONT]);
        FRONT++;
    }
}

void display_ele()
{
    int i;
    if(FRONT == (REAR+1))
    {
        printf("QUEUE IS EMPTY, NOTHING TO DISPLAY\n");
    }
    else
    {
        printf("QUEUE CONTAINS\n");
        for(i=FRONT;i<=REAR;i++)
        {
            printf("%d\t",queue[i]);
        }
    }
}

int main()
{
    int ch;

    do
    {
        printf("\n1-INSERT OPERATION\n");
        printf("2-REMOVE OPERATION\n");
        printf("3-DISPLAY OPERATION\n");
        printf("4-EXIT\n");

        printf("PROVIDE YOUR CHOICE \n");
        scanf("%d",&ch);

        switch(ch)
        {
            case 1:insert_ele();
            break;

            case 2:remove_ele();
            break;

            case 3:display_ele();
            break;

            case 4:exit(0);
            break;

            default: printf("\nINVALID CHOICE\n\n");
        }
    }
    while(1);

    return 0;
}
