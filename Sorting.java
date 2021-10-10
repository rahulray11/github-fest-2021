import java.util.Scanner;

 class Dcoder

 {

   public static void main(String args[])

   { 

    int arr[] = new int [8];

    Scanner sc = new Scanner(System.in);

    

   

    System.out.print("Enter 8 Digits (Separate with space):");

    

    for(int i = 0; i < arr.length; i++)

    {

      arr[i] = sc.nextInt();

    }

    

    int temp = 0;

    

    for(int i = 0; i < arr.length; i++)

    {

      for(int j = i + 1; j < arr.length; j++)

      {

        if (arr[i] > arr[j])

        {

          temp = arr[i];

          arr[i] = arr[j];

          arr[j] = temp;

        }

      }

    }

    

    for(int i = 0; i < arr.length; i++){

      System.out.print(arr[i] + " ");

    }

    

   }

 }
