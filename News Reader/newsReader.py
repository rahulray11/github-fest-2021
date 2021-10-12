import requests
import json

def speak(str):
    from win32com.client import Dispatch
    speak = Dispatch("SAPI.SpVoice")
    speak.Speak(str)

if __name__ == '__main__':

    speak("Hello friend . Enter number of headlines you want to listen..")
    c=int(input("Enter number of headlines you want to listen = "))

    speak("todays news headlines are ")

	# enter any news API url below
    url = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=0e8c6ea99193496f979dbd392298ee94"
	
    news = requests.get(url).text
    news_dict = json.loads(news)    # news_dict is a dictionary containing key value pairs in which one of its key is article whose value is a list of dictionaries
    arts = news_dict['articles']

    for article in arts:

        speak(article['title'])
        print(article['title'])

        c-=1
        if c==0:
            break
        else:
            speak("next news ...")

    print("Thankyou...")
    speak("thankyou for listening")

