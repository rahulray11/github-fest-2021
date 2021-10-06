// Program to implement DeQueue in cpp.

#include<iostream>
#include<stdio.h>
#include<stdlib.h>

int dequeue[50];
int REAR = -1;
int FRONT = -1;

void insert_from_rear()
{
    int a;
    if(REAR == 49)
    {
        printf("\nDEQUEUE OVERFLOW\n\n");
    }
    else
    {
        printf("\nENTER THE ELEMENT YOU WANT TO INSERT FROM REAR :");
        scanf("%d",&a);

        dequeue[REAR] = a;
        REAR++;
    }
}

void insert_from_front()
{
    int a;
    if(FRONT == 0)
    {
        printf("\nDEQUEUE OVERFLOW\n\n");
    }
    else
    {
        printf("ENTER THE ELEMENT YOU WANT TO INSERT FROM FRONT :");
        scanf("%d",&a);

        dequeue[FRONT-1] = a;
        FRONT--;
    }
}

void remove_from_rear()
{
    if(FRONT == REAR)
    {
        printf("\nDEQUEUE UNDERFLOW\n\n");
    }
    else
    {
        printf("\nREAR ELEMENT %d IS REMOVED FROM DEQUEUE ",dequeue[REAR-1]);
        REAR--;
    }
}

void remove_from_front()
{
    if(FRONT == REAR)
    {
        printf("\nDEQUEUE OVERFLOW\n\n");
    }
    else
    {
        printf("\nFRONT ELEMENT %d IS REMOVED FROM DEQUEUE ",dequeue[FRONT]);
        FRONT++;
    }
}

void display_operation()
{
    int i;
    if(FRONT == REAR)
    {
        printf("DEQUEUE IS EMPTY, NOTHING TO DISPLAY\n\n");
    }
    else
    {
        for(i=FRONT;i<=(REAR-1);i++)
        {
            printf("%d\n",dequeue[i]);
        }
    }
}

int main()
{
	int ch;

	do
	{
		printf("\n1 - INSERT FROM REAR\n");
		printf("2 - INSERT FROM FRONT\n");
		printf("3 - REMOVE FROM REAR\n");
		printf("4 - REMOVE FROM FRONT\n");
		printf("5 - DISPLAY\n");
		printf("6 - EXIT\n");

		printf("\nPROVIDE YOUR CHOICE :");
		scanf("%d",&ch);

		switch(ch)
		{
			case 1: insert_from_rear();
            break;

			case 2: insert_from_front();
            break;

			case 3: remove_from_rear();
            break;

			case 4: remove_from_front();
            break;

			case 5: display_operation();
            break;

			case 6: exit(0);
			break;

			default: printf("\n\nINVALID CHOICE\n");
		}
	}while(1);

	return 0;
}
