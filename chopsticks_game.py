
#  WELCOME to CHOPSTICKS game

player_1=[1,1]                # starting with 1 finger on left and right hands of both the players
player_2=[1,1]
flag=1

#Split check functions

def ifsplitp1(handp1, leftsp1, rightsp1):
    if handp1 == 'L':
        if player_1[0] != 0 and rightsp1 == player_1[1] + (player_1[0]-leftsp1):
                return 1
        else:
                return 0
    elif handp1 == 'R':
        if player_1[1] != 0 and leftsp1 == player_1[0] + (player_1[1]-rightsp1):
                return 1
        else:
                return 0

def ifsplitp2(handp2, leftsp2, rightsp2):
    if handp2 == 'L':
        if player_2[0] != 0 and rightsp2 == player_2[1] + (player_2[0]-leftsp2):
            return 1
        else:
            return 0
    elif handp2 == 'R':
        if player_2[1] != 0 and leftsp2 == player_2[0] + (player_2[1]-rightsp2):
            return 1
        else:
            return 0

#Status checking functions

def p1status():
    if(player_1[0] >= 5):
            player_1[0] = 0
    elif(player_1[1] >= 5):
            player_1[1] = 0


def p2status():
    if(player_2[0] >= 5):
            player_2[0] = 0
    elif(player_2[1] >= 5):
            player_2[1] = 0


#Winner deciding function

def loser():
    if (player_1[0] or player_1[1]) == 0:
        print("\n\nPlayer 2 Won !!!")
        flag=0
    
    elif (player_2[0] or player_2[0]) == 0:
        print("\n\nPlayer 1 Won !!!")
        flag=0


#Player 1

def p1():
    print('\nPlayer 1 turn : ')
    movep1 = input('Enter attack move Attack(A)/Split(S) : ')
    if movep1=='A' or movep1=='a':            
        m1 = input('Enter attack move combination: ')
        
        if m1=='lr' or m1== 'LR':
            player_2[1] += player_1[0]
        if m1=='ll' or m1=='LL':
            player_2[0] += player_1[0]
        if m1=='rr' or m1=='RR':
            player_2[1] += player_1[1]           
        if m1=='rl' or m1=='RL':
            player_2[0] += player_1[1]
        
        
    if movep1=='S' or movep1=='s':
        print('Enter split move combination (1-left / 2-right): ')
        handp1= input('Enter hand (1 or 2) =')
        leftsp1=input('Left hand after split =')
        rightsp1=input('Right hand after split =')
        
        def split(handp1, leftsp1, rightsp1):
            if ifsplitp1(handp1, leftsp1, rightsp1) == 1:
                if hand == 'L':
                    player_1[0] = leftsp1
                    player_1[1] = rightsp1
                    return 1
                elif hand == 'R':
                    player_1[0] = leftsp1 
                    player_1[1] = rightsp1
                    return 1
            else:
                return 0

    p1status()
    p2status()

    print('current scores:')
    print('player 1=',player_1 )
    print('player 2=',player_2 )

    loser()
    if(flag!=0):
        p2()   


#Player 2

def p2():
    print('\nPlayer 2 turn : ')
    movep2 = input('Enter attack move Attack(A)/Split(S) : ')
    if movep2=='A' or movep2=='a':
        m2 = input('Enter attack move combination: ')
        if m2=='lr' or m2== 'LR':
            player_1[1] += player_2[0]
        if m2=='ll' or m2=='LL':
            player_1[0] += player_2[0]
        if m2=='rr' or m2=='RR':
            player_1[1] += player_2[1]           
        if m2=='rl' or m2=='RL':
            player_1[0] += player_2[1]
        
        
    if movep2=='S' or movep2=='s':
        print('Enter split move combination (1-left / 2-right): ')
        handp2= input('Enter hand (1 or 2) =')
        leftsp2=input('Left hand after split =')
        rightsp2=input('Right hand after split =')
        
        def split(handp2, leftsp2, rightsp2):
            if ifsplitp2(handp2, leftsp2, rightsp2) == 1:
                if hand == 'L':
                    player_2[0] = leftsp2 
                    player_2[1] = rightsp2
                    return 1
                elif hand == 'R':
                    player_2[0] = leftsp1
                    player_2[1] = rightsp1
                    return 1
            else:
                return 0

    p1status()
    p2status()

    print('current scores:')
    print('player 1=',player_1 )
    print('player 2=',player_2 )

    loser()
    if(flag!=0):
        p1()


#START the GAME

start=1
while(start==1):
    p1()
    if(flag == 0):
        break      




