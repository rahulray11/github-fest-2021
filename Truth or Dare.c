//...Enter Your Name 

//...Enter Any No. From 1 to 10

//...Please Give Space Between Name And no.π

//...Hope you like it β€οΈ

 

#include <stdio.h>

int main ()

{

int b;

char s[15];

printf("πΉWELCOME TO THE TRUTH or DARE GAMEπΉ\n\n");

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

{case 1 : printf("TRUTH IS: 1.TELL US YOUR MOST EMBARRASSING MOMENT ππ.");

break;

case 2 : printf("DARE IS: 2.GO OUTSIDE AND SAY 'HAPPY NEW YEAR'TO EVERYONE ππΉ.");

break;

case 3 : printf("TRUTH IS: 3.HAVE YOU EVER FAKED A SICKNESS TO STAY HOME FROM SCHOOL OR COLLEGE...??π€.");

break;

case 4 : printf("DARE IS: 4.TRY TO LICK YOUR ELBOW.π"); 

break;

case 5 : printf("TRUTH IS: 5.TELL YOUR ANY SECRETπ.");

break;

case 6 : printf("DARE IS: 6.TALK WITH WALLS FOR 15 MINS.π");

break;

case 7 : printf("TRUTH IS: 7.WHO IS YOUR SECRET CRUSH.ππ");

break;

case 8 : printf("DARE IS: 8.DO 100 PUSHUPS.πͺπͺ");

break;

case 9 : printf("TRUTH IS: 9.WHO DO YOU HATE ? AND WHY ππ€.");

break;

case 10 : printf("DARE IS: 10.SMELL THE FEET OF EVERYONE IN THE ROOM AND RANK THEM FROM BEST TO WORSTπ΅.");

break;

 }

return 0 ;

 

 

}
