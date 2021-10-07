//...Enter Your Name 

//...Enter Any No. From 1 to 10

//...Please Give Space Between Name And no.😊

//...Hope you like it ❤️

 

#include <stdio.h>

int main ()

{

int b;

char s[15];

printf("🌹WELCOME TO THE TRUTH or DARE GAME🌹\n\n");

printf("ENTER YOUR NAME\n\n");

scanf("%s",s);

printf("ENTER ANY NO. FROM 1 TO 10: \n\n");

scanf("%d",&b );

if (b<=10)

{

printf("WELCOME :%s \n\n",s);

printf("YOUR GIVEN NO:%d\n\n",b);

}

else

{

printf("SORRY YOUR GIVEN NO. IS NOT UNDER 1 TO 10");

}

switch(b)

{case 1 : printf("TRUTH IS: 1.TELL US YOUR MOST EMBARRASSING MOMENT 😅😁.");

break;

case 2 : printf("DARE IS: 2.GO OUTSIDE AND SAY 'HAPPY NEW YEAR'TO EVERYONE 😂🌹.");

break;

case 3 : printf("TRUTH IS: 3.HAVE YOU EVER FAKED A SICKNESS TO STAY HOME FROM SCHOOL OR COLLEGE...??🤒.");

break;

case 4 : printf("DARE IS: 4.TRY TO LICK YOUR ELBOW.😋"); 

break;

case 5 : printf("TRUTH IS: 5.TELL YOUR ANY SECRET😈.");

break;

case 6 : printf("DARE IS: 6.TALK WITH WALLS FOR 15 MINS.😁");

break;

case 7 : printf("TRUTH IS: 7.WHO IS YOUR SECRET CRUSH.😍😍");

break;

case 8 : printf("DARE IS: 8.DO 100 PUSHUPS.💪💪");

break;

case 9 : printf("TRUTH IS: 9.WHO DO YOU HATE ? AND WHY 😒😤.");

break;

case 10 : printf("DARE IS: 10.SMELL THE FEET OF EVERYONE IN THE ROOM AND RANK THEM FROM BEST TO WORST😵.");

break;

 }

return 0 ;

 

 

}
