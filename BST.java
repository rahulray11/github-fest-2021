package data_Structures;
class Node
{
	int data;
	Node left,right;
	 public Node(int val)
	 {
		 data=val;
		 left=right=null;
	 }
}
 class BST {
	     Node root;
	     static int ind=0;
	    BST()
	    {
	        root = null;
	    }
	    void preOrder(Node root)
	    {
	    	if(root==null)
	    		return;
	    	System.out.print(root.data+ " " );
	    	preOrder(root.left);
	    	preOrder(root.right);
	    }
	    void inOrder(Node root)
	    {
	    	if(root==null) return;
	    	inOrder(root.left);
	    	System.out.print(root.data+" ");
	    	inOrder(root.right);
	    	
	    	
	    }
	    void postOrder(Node root)
	    {
	    	if(root==null) return;
	    	postOrder(root.left);
	    	postOrder(root.right);
	    	System.out.print(root.data+" ");
	    }
	void preOrder() {
		preOrder(root);
	}
		void inOrder() {
			inOrder(root);
	}
		void postOrder() {
			postOrder(root);
		}
		static Node buildTree(int pre[],int in[],int s,int e)
		{
			if(s>e)
				return null;
			
			int curr=pre[ind];
			ind++;
			Node node=new Node(curr);
			int pos=search(in,s,e,curr);
			if(s==e )
				return node;
			
			node.left=buildTree(pre,in,s,pos-1);
			node.right=buildTree(pre,in,pos+1,e);
			return node;
		}
	 private static int search(int[] in, int s, int e, int curr) {
			// TODO Auto-generated method stub
		 for(int i=s;i<=e;i++)
		 {
			 if(in[i]==curr)
				 return i;
		 }
			return -1;
		}
	public static void main(String[] args)
	 {
		 int preorder[]= {1,2,4,3,5};
		 int inorder[]= {4,2,1,5,3};
	Node root=buildTree(preorder,inorder,0,4);
		BST t=new BST();
		t.root=new Node(1);
		t.root.left=new Node(2);
		t.root.right=new Node(3);
		t.root.left.left=new Node(4);
		t.root.left.right=new Node(5);
		System.out.println("The preOrder traversal of tree");
		 t.preOrder();
		 System.out.println();
		
		 System.out.println("The postOrder traversal of tree");
		 t.postOrder();
		 System.out.println();
		 System.out.println("The inOrder traversal of tree");
			t.inOrder();
			System.out.println( );
	System.out.println("The inOrder traversal of tree");
	t.inOrder(root);
}
 }
