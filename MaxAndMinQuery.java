package Segment_trees;
import java.util.*;

public class MaxAndMinQuery {
static int n=1000;
static int tree[]=new int[4*n];
static int arr[]=new int[n];

static void build(int node,int s,int e)
{
	if(s==e)
	{
		tree[node]=arr[s];
	return;
	}	
	int mid=(s+e)/2;
	build(2*node,s,mid);
	build(2*node+1,mid+1,e);
	tree[node]=Math.max(tree[2*node], tree[2*node +1]);
	
	
}
 static int query(int  node,int s,int e,int l,int r)
{
	if(s>l|| e<r)
		return Integer.MIN_VALUE;
	if(l<=s && e<=r)
		return tree[node];
int mid=(s+e)/2;
int q1=query(2*node,s,mid,l,r);
int q2=query(2*node+1,mid+1,e,l,r);

return Math.max(q1,q2);
}
 static void update(int node,int s,int e,int ind,int val)
{
	if(s==e)
	{
		arr[s]=val;
		tree[node]=val;
		return;
	}
	int mid=(s+e)/2;
	if(ind<=mid)
	{
		update(2*node,s,mid,ind,val);
	}
	else
		update(2*node+1,mid+1,e,ind,val);
	tree[node]=Math.max(tree[2*node], tree[2*node +1]);
}
 
	public static void main(String[] args) {
		
		Scanner s=new Scanner(System.in);
		int n=s.nextInt();
		for(int i=0;i<n;i++)
		{
			arr[i]=s.nextInt();
			}
		build(1,0,n-1);
		while(true)
		{
		int type=s.nextInt();
		 if(type==-1)
		 {
			 break;
		 }
			 if(type==1)
		 {
			 int l=s.nextInt();
			 int r=s.nextInt();
			 int ans=query(1,0,n-1,l,r);
			 System.out.println(ans);
		 }
			 if(type==2)
			 {
				int ind=s.nextInt();
				int val=s.nextInt();
				update(1,0,n-1,ind,val);
				System.out.println(query(1,0,n-1,0,n-1));
				}
	}
	}
}
