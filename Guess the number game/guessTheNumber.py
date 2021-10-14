
'''
Guess The number

Generate a random integer from a to b. You and your friend have to guess a number between two numbers a and b. a and b are inputs taken from the user. Your friend is player 1 and plays first. He will have to keep choosing the number and your program must tell whether the number is greater than the actual number or less than the actual number. Log the number of trials it took your friend to arrive at the number. You play the same game and then the person with minimum number of trials wins!

Randomly generate a number after taking a and b as input and don’t show that to the user (say 6)

Input:

Enter the value of a

4

Enter the value of b

13

Output:

Player1 :

Please guess the number between 4 and 13

5

Wrong guess a greater number again

8

Wrong guess a smaller number again

6

Correct you took 3 trials to guess the number

Player 2:

.

.

.

Correct you took 7 trials to guess the number

Player 1 wins!



'''


import random

def guessgame(a,b,number):
    n=1
    guess=int(input("Enter a number between your range ="))
    while guess!=number:
        if guess>number:
            guess=int(input("Enter a smaller no."))
            n += 1
        else:
            guess = int(input("Enter a larger no."))
            n += 1
    print(f"You guessed the number in {n} turns.")

    return n



if __name__ == '__main__':

    print("\n\t<------------------------- WELCOME TO MY MULTIPLAYER NUMBER GUESSING GAME -------------------->\t\n")
    a=int(input("enter value of lower end of range = "))
    b=int(input("enter value of upper end of range = "))

    number=random.randint(a,b)

    print("Player 1's turn =")
    g1=guessgame(a,b,number)

    number = random.randint(a, b)
    print("Player 2's turn =")
    g2=guessgame(a,b,number)

    if g1>g2:
        print("Player 2 won !")
    elif g1 > g2:
        print("Player 2 won !")
    else:
        print("Its a Tie !")