#  Mini Project for beginners
# 
#  Library database system  using oops concept of python


class Library:

    def __init__(self,list,name):
        self.booklist=list
        self.name=name
        self.lenddict={}

    def display(self):
        print(f"\n{self.name} library is a having a collection of following books = \n")

        for book in self.booklist:
            print(f"{book}")


    def lendbook(self,book,user):

        if book not in self.lenddict.keys():
            self.lenddict.update({book:user})
            print(f"{self.name} lending database updated. You can take the book.\n")
        else:
            print(f"SorrY ! Book is already lended to {self.lenddict[book]}")

    def addbook(self,book):
        self.booklist.append(book)
        print(f" Thankyou for donating book to {self.name} library .\n")
        print("Your book is added to the library database.\n")

    def returnbook(self,book):
        if book in self.lenddict.keys():
            self.lenddict.pop(book)
            print(" Your book is returned \n")
        else:
            print(" Book is already present in library.")




if __name__ == '__main__':


    jnec=Library(['Harry Potter','Dragon tales','python','D.S','cpp','Ramayan'],"JNEC")

    print("<_____ WELCOME TO JNEC ONLINE LIBRARY SYSTEM______>\n\n")

    while(1):

        print("\nServices provided here =\n1. Display available books\n2. Lending\n3. Donate book to library\n4. Return Book")

        x=int(input("Enter your choice = \n"))

        if x==1:
            jnec.display()

        elif x==2:
            book=input("Enter the name of book = \n")
            user=input("Enter your name =\n")
            jnec.lendbook(book,user)

        elif x==3:
            book=input("Enter name of book you want to donate =\n")
            jnec.addbook(book)

        elif x==4:
            book=input("Enter name of book you want to return =\n")
            jnec.returnbook(book)

        else:
            print(" invlaid input. ")


        print("Press 'q' to quit or  'c' to continue = " )
        y=""
        while(y!='c' and y!='q'):
            y = input()
            if y == 'q':
                exit()
            elif y == 'c':
                continue

