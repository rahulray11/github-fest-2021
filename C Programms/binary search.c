#include<stdio.h>
void sort(int n,int a[]);
void search(int low,int high,int a[],int s);
int main()
{
	int n,s;
	printf("enter the size:\n");
	scanf("%d",&n);
	int a[n-1];
	printf("enter the elements:\n");
	for(int i=0;i<n;i++)
	{
		scanf("%d",&a[i]);
	}
	sort(n,a);
	for(int i=0;i<n;i++)
	{
		printf("%d ",a[i]);
	}
	printf("\nenter the search element:\n");
	scanf("%d",&s);
	search(1,n,a,s);
}
void sort(int n,int a[])
{
	int i,j,temp;
	for(i=0;i<n;i++)
	{
		for(j=i+1;j<n;j++)
		{
			if(a[i]>a[j])
			{
				temp=a[i];
				a[i]=a[j];
				a[j]=temp;
			}
		}
	}
}
void search(int low,int high,int a[],int s)
{
	int mid;
	if(low>high)
	{
		printf("search is not successful");
		return;
	}
	mid=(low+high)/2;
	if(a[mid]==s)
	{
		printf("search successful\nposition:%d",mid+1);
	}
	else if(s<a[mid])
	{
		search(low,mid-1,a,s);
		
	}
	else if(s>a[mid])
	{
		search(mid+1,high,a,s);
	}
}
