from  matplotlib import pyplot 
labels = tuple(str(input("Enter Labels(Split each labels with space): ")).split(' '))
sizes = [float(x) for x in str(input("Enter Sizes(Split each labels with space): ")).split(' ') ]

if sum(sizes) == 100:
    if len(sizes) == len(labels):

        pyplot.pie(sizes, labels=labels,autopct='%1.f%%',counterclock=False,startangle=90)

        pyplot.show()
    
    else:
        print('Number of Labels and Sizes are miss match')
else:
    print('Sum of sizes is not equal to 100')