#include<iostream>
using namespace std;

int main() {
	int n , x;
	cin >> n >> x;
	int arr[n];
	for(int i = 0 ; i < n ; i++)
		cin >> arr[i];
  // Searching Element
	for(int i = 0 ; i < n ; i++)
	{
		if(arr[i] == x)
		{
      // Element Found
			cout<<"Found at"<<" "<< i <<endl;
			return 0;
		}
	}
  // Element Not Found
	cout<<"Not Found"<<endl;
	return 0;
}
