// Program to implement stack in cpp

#include<stdio.h>
#include<stdlib.h>

int stack[5];
int TOP = -1;

void push_element()
{
    int ele;

    if(TOP == 4)
    {
        printf("\n");
        printf("stack overflow\n\n");
    }
    else
    {
        printf("Enter the element which you want to push :");
        scanf("%d",&ele);

        printf("\n\n");

        TOP = TOP + 1;

        stack[TOP] = ele;

    }
}

void pop_element()
{
  if(TOP == -1)
  {
      printf("\n");
      printf("Stack underflow\n");
  }
  else
  {
      printf("popped element is : %d",stack[TOP]);
      printf("\n\n");
      TOP = TOP - 1;
  }
}

void display_element()
{
    int i;

    if(TOP == -1)
    {
        printf("\n\n");
        printf("stack underflow \n");
    }
    else
    {
        printf("\nelements in the stack are :\n");

          for(i=TOP;i>-1;i--)
           {
             printf("%d\n",stack[i]);
           }
           printf("\n\n");
    }
}

int main()
{
    int ch;

    do
    {
    printf("1-push\n");
    printf("2-pop\n");
    printf("3-Display\n");
    printf("4-Exit\n");

    printf("Provide your choice :");
    scanf("%d",&ch);

        switch(ch)
        {
            case 1: push_element();
                     break;

            case 2: pop_element();
                     break;

            case 3: display_element();
                     break;

            case 4 : exit(0);

            default: printf("\n\nInvalid choice\n");
                     printf("\n\n");
        }
    }
     while(1);


    return 0;
}
