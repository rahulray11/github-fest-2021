from tkinter import *
import requests
I = 0

def get_quote():
    global I
    resonse = requests.get("https://type.fit/api/quotes")
    resonse.raise_for_status()
    data= resonse.json()

    quote = [data[i]["text"] for i in range(1643)]
    canvas.itemconfig(quote_text, text=quote[I])
    I = I+1
    

scr= Tk()
scr.title("Kanye says...")
scr.config(padx=50, pady=50, bg="BLACK")

canvas= Canvas(width=300, height=414, background="black", highlightbackground="black")
bg_img= PhotoImage(file="bgimg.png")
canvas.create_image(150, 207, image= bg_img)
canvas.grid(row=0, column=0)
quote_text = canvas.create_text(150, 207, text="πΌπ» πππ ππΆππ ππ πππ \n    π¬ππππ πΈππΎπΈπ \n          β¬", width=250, font=("greatwall", 23, "italic"), fill="red")

# btn_img= PhotoImage(file="D:\\python\\Exercises\\Quotes\\2.png")
# acutall_button= Button(image=btn_img, highlightthickness=0, command=get_quote)
acutall_button= Button(text="HEY!\nCLICK HERE β­", font=("typewriter", 8, "bold"), highlightthickness=0, command=get_quote, background="red")
acutall_button.grid(row=1, column=0, pady= 30)

scr.mainloop()