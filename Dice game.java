/*

just click run button :) hope you like 

*/

import java.util.Random;

public class Program

{

public static void six(){

   System.out.print("---------\n| *   * |\n| *   * |\n| *   * |\n---------");

}

public static void five(){

   System.out.print("---------\n| *   * |\n|   *   |\n| *   * |\n---------");

}

public static void four(){

   System.out.print("---------\n| *   * |\n|       |\n| *   * |\n---------");

}

public static void three(){

   System.out.print("---------\n|     * |\n|   *   |\n| *     |\n---------");

}

public static void two(){

   System.out.print("---------\n|     * |\n|       |\n| *     |\n---------");

}

public static void one(){

   System.out.print("---------\n|       |\n|   *   |\n|       |\n---------");

}

public static int random(){

   Random r = new Random();

   int a = r.nextInt(6)+1;

   return a;

}

    public static void main(String[] args) {

        int you = random();

        int computer = random();

        

     System.out.println("you");

        switch(you){

           case 1: one();   break;

           case 2: two();   break;

           case 3: three(); break;

           case 4: four();  break;

           case 5: five();  break;

           case 6: six();   break;

        }

        System.out.println("\n");

        System.out.println("computer");

        switch(computer){

           case 1: one();   break;

           case 2: two();   break;

           case 3: three(); break;

           case 4: four();  break;

           case 5: five();  break;

           case 6: six();   break;

        }

        if(you>computer){

            System.out.println("\nLucky! you won. \ndon't forget like :)");

        }

        if(computer>you){

            System.out.println("\nYou lost :( \ntap run button till you win :)");

        }

        if(you==computer){

           System.out.println("\nDraw! click run button again");

        }

    }

}
