#include <iostream>  
#include<queue>  
using namespace std;  
int main()  
{  
 priority_queue<int> p;  // variable declaration.  
 p.push(10); // inserting the 10 in a queue, top=10  
 p.push(30); // inserting the 30 in a queue, top=30  
 p.push(20); // inserting the 20 in a queue, top=20  
 cout<<"Number of elements available in 'p' :"<<p.size()<<endl;  
 while(!p.empty())  
 {  
     std::cout << p.top() << std::endl;   
     p.pop();  
 }  
 return 0;  
}  

/*
Output

Number of elements available in 'p' :3
30
20
10 zzzz/



*/
