#include<iostream>
#include<stdlib.h>
using namespace std;

class stack{
	int *arr;
	int size;
	int n;
	public:
		stack(){
			cout<<"\nEnter size of stack : ";
			cin>>this->size;
			arr = new int[size];
			n=-1;
		}
		void pop(){
			if(isEmpty()){
				cout<<"Stack underflow, pop not possible\n";
			}
			else{
				--n;
			}
		}
		void push(){
			if(isFull()){
				cout<<"Stack Overflow, push not possible\n";
			}
			else{
				cout<<"Enter value to be inserted : ";
				int val;
				cin>>val;
				++n;
				arr[n] = val;
			}
		}
		int top(){
			if(isEmpty()){
				
				return -1;
			}
			return arr[n];
		}
		bool isEmpty(){
			if(n==-1)
				return 1;
			else
				return 0;
		}
		bool isFull(){
			if(n==size-1)
				return 1;
			else
				return 0;
		}
		void display(){
			cout<<"Elements of stack : ";
			for(int i=n; i>=0; i--){
				cout<<arr[i]<<" ";
			}
		}
};
int menu(){
	
	cout<<"\n1.Push\n2.Pop\n3.Top\n4.Print all elements\n5.Exit\n";
	cout<<"Select your choice : ";
	int n;
	cin>>n;
	system("CLS");
	cout<<endl;
	return n;
}
int main(){
	stack s;
	int choice;
	do{
		choice = menu();
		switch(choice){
		case 1:
			s.push();
			break;
		case 2:
			s.pop();
			break;
		case 3:
			if(s.top()==-1){
				cout<<"Stack under flow\n";
			}
			else{
				cout<<"Element at top : "<<s.top();
			}
			break;
		case 4:
			s.display();
			break;
		case 5:
			break;
		default:
			cout<<"Invalid Choice!!! Try again\n";
			break;
		}
	}while(choice!=5);
	return 0;
}
