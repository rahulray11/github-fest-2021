package data_Structures;

public class FlattenTree {

void flatten(Node root)
{
	if(root==null||(root.left==null&&root.right==null))
		return;
if(root.left!=null)
{
	flatten(root.left);
	Node temp=root.right;
	root.right=root.left;
	root.left=null;
	Node t=root.right;
	while(t.right!=null)
{
		t=t.right;
}
	t.right=temp;
}
flatten(root.right);
}
void inorder(Node root)
{
	if(root==null)
		return;
	inorder(root.left);
	System.out.print(root.data+" ");
	inorder(root.right);
}
//print suub tree nodes 
//case 1
	void subTreeNodes(Node root,int k)
	{
		if(root==null||k<0)
			return;
		if(k==0)
			System.out.print(root.data+" ");
		subTreeNodes(root.left,k-1);
		subTreeNodes(root.right,k-1);
		
	}
//	case 2
	int NodesAtK(Node root,Node target,int k)
	{
		if(root==null)
			return -1;
		if(root==target)
		{
			subTreeNodes(root,k);
			return 0;
		}
		int dl=NodesAtK(root.left,target,k);
		if(dl!=-1)
			
		{
			if(dl+1==k)
				System.out.print(root.data+" ");
			else
				subTreeNodes(root.right,k-dl-2);
			return 1+dl;
		}
	
		int dr=NodesAtK(root.right,target,k);
		if(dr!=-1)
			
		{
			if(dr+1==k)
				System.out.print(root.data+" ");
			else
				subTreeNodes(root.left,k-dr-2);
			return 1+dr;
		}
		return -1;
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
FlattenTree t=new FlattenTree();
Node root=new Node(1);
root.left=new Node(2);
root.right=new Node(3);
root.left.left=new Node(4);

//t.inorder(root);
t.NodesAtK(root, root.left, 1);
	}

}
