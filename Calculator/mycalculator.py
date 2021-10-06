# command line calculator 

#my code starts here
def help():
    print("SYMBOLS AND THEIR FUNCTIONS : \n1. + => addition\n2. - => subtraction\n3. / => division\n4. * => multiplication\n5. // => floor division\n6. % => modulo(finding remainder)\n7.** => exponentiation\n8.about => information about command line calculator\n9.info => information about this project and the developer")

def info():
    print("PROJECT NAME : COMMAND LINE CALCULATOR\nDEVELOPER : VIKAS KAUSHIK\nLANGUAGE USED : PYTHON\nAGE : 16\nGITHUB : vikask1")

def about():
    print("hii user,\nthis is a command line calculator created by me(vikas kaushik) using python version 3.9. This calculator can be operated by giving commands ex 2 + 2. If you want to know about this project type \"info\" and you\' get all the information, type \"help\" for help and you\'ll get help.\nHope you like it,\n- Vikas Kaushik")


print('command line calculator'.upper())
print("\n\nwant help type \"help\".\nwant to know about command line calculator type \"about\".\nwant to get the information about the developer(me) and this project(command line calculator) type \"info\".\n")
def main():
    command = input(">> ")
    if command == "info":
        info()
    elif command == "help":
        help()
    elif command == "about":
        about()
    else:
        print(f">>> {eval(command)}")
        
while 2:
    try:
        main()
        print()
    except ZeroDivisionError as zde:
        print(zde)
    except SyntaxError as se:
        print(se)
    except NameError as ne:
        print(ne)
#my code ends here
