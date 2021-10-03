#include <iostream>
using namespace std;
int div_count=0,mer_count=0;

void printArray(int A[],int start, int end)
{
	for(int i=start;i<=end;i++)
		cout<<A[i]<<" ";
}
void merge(int arr[],int l,int m,int r)
{
	mer_count++;
	int n1=m-l+1,n2 =r-m;
	int L[n1], R[n2];
	for (int i=0;i<n1;i++)
		L[i]=arr[l+i];
	for (int j=0;j<n2;j++)
		R[j]=arr[m+1+j];
	int i=0,j=0,k=l;

	while (i < n1 && j < n2) {
		if (L[i]<=R[j]) {
			arr[k]=L[i];
			i++;
		}
		else {
			arr[k]=R[j];
			j++;
		}
		k++;
	}
	while (i < n1) {
		arr[k]=L[i];
		i++;
		k++;
	}
	while (j < n2) {
		arr[k] = R[j];
		j++;
		k++;
	}
}
void mergeSort(int arr[],int l,int r){
	if(l<r){
		int m =(l+r)/2;
		cout<<"\nleft subarray  :  ";
		printArray(arr,l,m);
		mergeSort(arr,l,m);
		cout<<"\nright subarray  :  ";
		printArray(arr,m+1,r);
		mergeSort(arr,m+1,r);
		div_count++;
		
		cout<<"\nfor merge  :  ";
		printArray(arr,l,m);
		cout<<"& ";
		printArray(arr,m+1,r);
		merge(arr,l,m,r);
		cout<<"\nafter merge  :  ";
		printArray(arr,l,r);
		cout<<"\n";
	}
	else
		return;	
}

int main()
{
	int arr_size ;
	cout<<"size  :  ";
	cin>>arr_size;
	int arr[arr_size];
	cout<<"enter elements of array  : ";
	for(int i=0;i<arr_size;i++)
	 	cin>>arr[i];
mergeSort(arr,0,arr_size-1);
	cout<<"\nsorted array is : ";
	printArray(arr,0,arr_size-1);
	cout<<"\ncomplexity of dividing is O(log(n)) complexity of merging is O(n)";																																											div_count=div_count/2;
	cout<<"\ndividing happen  "<<div_count<<" times  merging happen "<<mer_count<<" times";
//	cout<<"\noverall complexity is " << (div_count)*(mer_count);
 
	return 0;
}


