import keyboard
from PIL import ImageGrab
import time

def hit(key):
    keyboard.press(key)
    time.sleep(0.5)
    keyboard.release(key)

def collide(data,color):
    if color == 0:   # For white screen
        for i in range(270, 300):
            for j in range(380, 440):
                if data[i,j] < 100:
                    hit('up')
                    return
    elif color == 1:     # For black screen
        for i in range(270, 300):
            for j in range(380, 440):
                if data[i,j] > 100:
                    hit('up')
                    return
    return

def bird(data,color):
    if color ==0 :
        for i in range(320, 350):
            for j in range(330, 375):
                if data[i, j] < 100:
                    hit('down')
                    return
    elif color == 1:
        for i in range(320, 350):
            for j in range(330, 375):
                if data[i, j] > 100:
                    hit('down')
                    return
    return

def color(data):
    for i in range(100, 140):
        for j in range(100, 140):
            if data[i, j] < 100:
                return(1)
    return(0)


if __name__ == '__main__':
    print('Game is about to start in 5 seconds !')
    time.sleep(5)
    hit('up')
    while True:
        image = ImageGrab.grab().convert('L')
        data = image.load()
        val = color(data)
        bird(data,val)
        collide(data,val)
