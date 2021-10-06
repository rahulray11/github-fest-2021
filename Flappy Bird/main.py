import pygame
import random
from pygame.locals import *
import sys
import os

FPS = 32
ScreenWidth = 289
ScreenHeight = 511
Screen = pygame.display.set_mode((ScreenWidth, ScreenHeight))  # game screen

GroundY = ScreenHeight * 0.8

Game_Image = {}
Game_Sound = {}

Bird = 'Gallery/Pictures/bird.png'
Background = 'Gallery/Pictures/background.png'
Pipe = 'Gallery/Pictures/pipe.png'

def welcomescreen():
    # Shows welcome image on screen
    playerx = int(ScreenWidth/5)
    playery = int(ScreenHeight - Game_Image['player'].get_height()) / 2
    messagex = int(ScreenHeight - Game_Image['message'].get_width()) / 6
    messagey = int(ScreenHeight * 0.13)
    basex = 0
    while True:
        for event in pygame.event.get():
            # to close the game
            if event.type == QUIT or ( event.type == KEYDOWN and event.key == K_ESCAPE) :
                pygame.quit()
                sys.exit()

            elif event.type == KEYDOWN and ( event.key == K_SPACE or event.key == K_UP ):
                return
            else :
                Screen.blit(Game_Image['background'], (0,0))
                Screen.blit(Game_Image['player'], (playerx,playery))
                Screen.blit(Game_Image['message'], (messagex,messagey))
                Screen.blit(Game_Image['base'], (basex,GroundY))
                pygame.display.update()
                FPSCLOCK.tick(FPS)

def isCollide(playerx,playery,upperpipe,lowerpipe):
    if playery > GroundY -25 or playery == 0:
        return True

    for pipe in upperpipe:
        pipeheight = Game_Image['pipe'][0].get_height()
        if playery < pipeheight + pipe['y'] and abs(playerx - pipe['x']) < Game_Image['pipe'][0].get_width():
            return True
    for pipe in lowerpipe:
        if (playery + Game_Image['player'].get_height() > pipe['y']) and abs(playerx - pipe['x'])<Game_Image['pipe'][0].get_width():
            return True
    return False

def getRandomPipe():
    # Gives random pipe positions to main game
    pipehight = Game_Image['pipe'][0].get_height()
    offset = ScreenHeight/3
    y2 = offset + random.randrange(0,int(ScreenHeight-Game_Image['base'].get_height()- 1.2*offset))
    pipex = ScreenWidth +10
    y1 = pipehight - y2 + offset
    pipe = [
        { 'x' : pipex, 'y' : -y1 },  # Upper pipe
        { 'x' : pipex, 'y' : y2 }  # Lower pipe
    ]
    return(pipe)

def maingame():
    score = 0
    playerx = int(ScreenWidth/5)
    playery = int(ScreenWidth/2)
    basex = 0

    # For creating pipes on game screen
    newpipe1 = getRandomPipe()
    newpipe2 = getRandomPipe()

    # Upper pipe list
    upperpipe = [
        { 'x' : ScreenWidth+200 , 'y' : newpipe1[0]['y'] },
        { 'x' : ScreenWidth+200+(ScreenWidth/2), 'y' : newpipe2[0]['y'] }
    ]

    # Lower pipe list
    lowerpipe = [
        {'x': ScreenWidth + 200, 'y': newpipe1[1]['y']},
        {'x': ScreenWidth + 200 + (ScreenWidth / 2), 'y': newpipe2[1]['y']}
    ]
    pipeVelx = -4
    playerVely = -9
    playerMaxVely = 10
    playerMinVely = -8
    playerAccy = 1

    playerFlapAcc = -8      # Velocity for flapping
    playerFlapped = False   # True while flying

    while True :
        for event in pygame.event.get():
            if event.type == QUIT or ( event.type == KEYDOWN and event.key == K_ESCAPE) :
                pygame.quit()
                sys.exit()
            if event.type == KEYDOWN and ( event.key == K_SPACE or event.key == K_UP ) :
                if playery > 0 :
                    playerVely = playerFlapAcc
                    playerFlapped = True
                    Game_Sound['wing'].play()

        crashtest = isCollide(playerx,playery,upperpipe,lowerpipe) #Check whether bird hits the pipe
        if crashtest :
            Game_Sound['hit'].play()
            return

        # To count score
        playerMid = playerx + Game_Image['player'].get_width()/2
        for pipe in upperpipe:
            pipeMid = pipe['x'] + Game_Image['pipe'][0].get_width()/2
            if pipeMid <= playerMid < pipeMid + 4 :
                score +=1
                Game_Sound['point'].play()

        if playerVely < playerMaxVely and not playerFlapped:
            playerVely += playerAccy

        if playerFlapped:
            playerFlapped = False

        playerheight = Game_Image['player'].get_height()
        playery = playery + min(playerVely, GroundY - playery - playerheight)

        # For moving the pipes

        for upperpipes,lowerpipes in zip(upperpipe,lowerpipe):
            upperpipes['x'] += pipeVelx
            lowerpipes['x'] += pipeVelx

        # For adding new pipe
        if 0 < upperpipe[0]['x'] < 5:
            newpipe = getRandomPipe()
            upperpipe.append(newpipe[0])
            lowerpipe.append(newpipe[1])

        # For removing pipes which get out of screen
        if upperpipe[0]['x'] < -Game_Image['pipe'][0].get_width():
            upperpipe.pop(0)
            lowerpipe.pop(0)

        # For blitting the images on game screen
        Screen.blit(Game_Image['background'], (0,0))
        for upperpipes,lowerpipes in zip(upperpipe,lowerpipe):
            Screen.blit(Game_Image['pipe'][0], (upperpipes['x'], upperpipes['y']))
            Screen.blit(Game_Image['pipe'][1], (lowerpipes['x'], lowerpipes['y']))

        Screen.blit(Game_Image['base'],(basex,GroundY))
        Screen.blit(Game_Image['player'], (playerx, playery))
        mydigits = [int(x) for x in list(str(score))]
        width=0
        for digit in mydigits:
            width += Game_Image['numbers'][digit].get_width()
        xoffset = (ScreenWidth - width) / 2

        for digit in mydigits:
            Screen.blit(Game_Image['numbers'][digit], (xoffset, ScreenHeight*0.12))
            xoffset += Game_Image['numbers'][digit].get_width()
        pygame.display.update()
        FPSCLOCK.tick(FPS)


if __name__ == '__main__':
    pygame.init()  #for initializing pygame module
    FPSCLOCK = pygame.time.Clock()
    pygame.display.set_caption('Flappy Bird! By Tushar Sinha')

    #For the images used in game
    print(os.getcwd())
    Game_Image['numbers'] =  (
        pygame.image.load('Gallery/Pictures/0.png').convert_alpha(),
        pygame.image.load('Gallery/Pictures/1.png').convert_alpha(),
        pygame.image.load('Gallery/Pictures/2.png').convert_alpha(),
        pygame.image.load('Gallery/Pictures/3.png').convert_alpha(),
        pygame.image.load('Gallery/Pictures/4.png').convert_alpha(),
        pygame.image.load('Gallery/Pictures/5.png').convert_alpha(),
        pygame.image.load('Gallery/Pictures/6.png').convert_alpha(),
        pygame.image.load('Gallery/Pictures/7.png').convert_alpha(),
        pygame.image.load('Gallery/Pictures/8.png').convert_alpha(),
        pygame.image.load('Gallery/Pictures/9.png').convert_alpha(),
    )
    Game_Image['message'] = pygame.image.load('Gallery/Pictures/message.png').convert_alpha()
    Game_Image['base'] = pygame.image.load('Gallery/Pictures/base.png').convert_alpha()
    Game_Image['pipe'] = (
        pygame.transform.rotate(pygame.image.load(Pipe).convert_alpha(),180),
        pygame.image.load(Pipe).convert_alpha()
    )
    Game_Image['background'] = pygame.image.load(Background).convert_alpha()
    Game_Image['player'] = pygame.image.load(Bird).convert_alpha()

    #For the sound used in game

    Game_Sound['die'] = pygame.mixer.Sound('Gallery/Audio/die.wav')
    Game_Sound['hit'] = pygame.mixer.Sound('Gallery/Audio/hit.wav')
    Game_Sound['swoosh'] = pygame.mixer.Sound('Gallery/Audio/swoosh.wav')
    Game_Sound['point'] = pygame.mixer.Sound('Gallery/Audio/point.wav')
    Game_Sound['wing'] = pygame.mixer.Sound('Gallery/Audio/wing.wav')

    # For running game

    while True:
        welcomescreen()   # Starting of the screen
        maingame()   # The main game