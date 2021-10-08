#include <iostream> 

#include <cmath> 

using namespace std; 

int main() {

              

unsigned long int num1;

char op; 

cin >> num1 >> op;    

int num4 = sqrt (num1); 

switch (op) {

   

    case '%': //use % to square numbers 

    cout << "square " << num1 << " = " << (num1 * num1) << endl; 

    break; 

    

    case '^': // use ^ to square root numbers  

    cout << "square root " << num1 << " = " << num4 << endl;

    break; 

}

 return 0;

 }

    

    

