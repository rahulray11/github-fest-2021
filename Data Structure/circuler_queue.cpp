//Program to implement Circular Queue in cpp.

#include<stdio.h>
#include<stdlib.h>

int queue[5];
int max=5;
int front = 0;
int rear=-1;

void insert_ele()

{   if(rear==max-1&&front>0)
    {
        rear=-1;
    }

    if(rear==max-1&&front==0)
     {
      printf("queue overflow\n");

     }

     else if(rear==front-1&&front!=0)
      {
        printf("queue overflow\n");
      }
   else
    {
    int a;
    printf("Enter element to push\n");
	scanf("%d",&a);

	queue[rear+1]=a;
	rear++;
	}
}

void remove_ele()
{

    if(front==max)
    {
       front=0;
    }

    if(front==0&&rear==-1)
    {
        printf("queue underflow\n");
    }
   else if(rear==front-1&&rear==-1)
    {
        printf("queue underflow\n");
    }
    else
    {
      printf("Removed element is :%d\n",queue[front]);
     front++;
     if(front==rear+1)
     {
         front=0;
         rear=-1;
     }
   }
}

void display()
{
    int i;
    if(front==0&&rear==-1)
    {
        printf("Queue is empty, nothing to display\n");
    }
    else if(rear==front-1&&rear==-1)
    {
        printf("Queue is empty, nothing to display\n");

    }
    else
    {
        printf("Element in the queue are:\n");
        if(front<=rear)
        {
            for(i=front;i<=rear;i++)
            {
                printf("%d\t",queue[i]);
            }
        }
        if(front>rear)
        {
            for(i=front;i<=max-1;i++)
            {
                printf("%d\t",queue[i]);
            }
            for(i=0;i<=rear;i++)
            {
                printf("%d\t",queue[i]);
            }
        }
    }
}

int main()
{
    int ch;
    do
	{   printf("\n");
        printf(" 1 - INSERT \n");
	    printf(" 2 - REMOVE \n");
	    printf(" 3 - DISPLAY\n");
	    printf(" 4 - EXIT\n\n");
	    printf("Provide your choice :\n");
	    scanf("%d", &ch);

	    printf("\n");
	    switch(ch)
	    {
		case 1: insert_ele();
			break;
		case 2: remove_ele();
			break;
		case 3: display();
			break;
		case 4: exit(0);
        default:
            printf("invalid choice\n");

        }
	}while(1);

	return 0;
}



