import requests
from bs4 import BeautifulSoup
import smtplib

url = 'Paste your url here'
headers = {'user-agent': 'Paste your user agent'}
normal_price = 39999 

def send_mail():
    server = smtplib.SMTP(
        'smtp.gmail.com',
        587
    )
    server.ehlo()
    server.starttls()
    server.ehlo()

    server.login(
        'Your Mail id',
        'Password'
    )

    subject = 'Price fell down'
    body = 'Your url'

    msg = f'Subject: {subject} \n\n {body}'

    server.sendmail(
        'Your mail id again',
        'Here write the mail where you want to send the message',
        msg
    )
    print('Mail has been sent')
    server.quit()


def check_price():
    page = requests.get(
        url,
        headers=headers
    )

    soup = BeautifulSoup(
        page.content,
        'html.parser'
    )

    # Getting title of our product
    title = soup.find(id='productTitle').get_text().strip()

    # Getting current price from amazon page
    price = soup.find(id='priceblock_ourprice').get_text()

    # Pricing in india use commas so removing them below
    converted_price = float(price[1:].replace(',', ''))

    # Displaying product and its price
    print(f'Your product is: {title}')
    print(f"Product's price is {price}")

    if converted_price < normal_price:
        print(f"Yay! Price fell down \nNew price is : {price}")
        send_mail()

    else:
        print("Price has gone up." if converted_price > normal_price else "Price is still the same")


check_price()
