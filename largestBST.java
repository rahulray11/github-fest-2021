package data_Structures;

  class info
{
	int size;
	int max;
	int min;
	int ans;
	boolean isBST; 	
}
public class largestBST{

	static info Largest(Node root)
	{
		if(root==null)
		{
			 info k = new info();
	            k.size=0;
	            k.max=Integer.MIN_VALUE;
	            k.min=Integer.MAX_VALUE;
	            k.ans = 0;
	            k.isBST = true;
	            return k;
	}
		if(root.left==null&&root.right==null)
		{ info k = new info();
			 k.size=1;
	            k.max=root.data;
	            k.min=root.data;
	            k.ans = 1;
	            k.isBST = true;
	            return k;
		}
		info leftInf=Largest(root.left);
		info rightInf=Largest(root.right);
		info curr=new info();
		curr.size=(1+leftInf.size+rightInf.size);
		if(leftInf.isBST && rightInf.isBST && leftInf.max < root.data && rightInf.min >root.data)
		{
			curr.min=Math.min(leftInf.min, Math.min(rightInf.min,root.data));
			curr.max=Math.max(leftInf.max, Math.max(rightInf.max,root.data));
			curr.ans=curr.size;
			curr.isBST=true;
		
			return curr;
		}
		curr.ans=Math.max(leftInf.ans, rightInf.ans);
		curr.isBST=false;
		return curr;
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Node root=new Node(15);
		root.left=new Node(20);
		root.right=new Node(30);
		root.left.left=new Node(5);
		
		System.out.println("Largest BST  in BT " + Largest(root).ans);

	}

}
