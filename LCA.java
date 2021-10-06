package data_Structures;

import java.util.*;

public class LCA {

	int lca(Node root,int n1,int n2)
	{
		List<Integer> l1=new ArrayList<>();
		List<Integer> l2=new ArrayList<>();
		if(!getPath(root,n1,l1)  || !getPath(root,n2,l2))
		{
			return -1;
		}
		int pc=0;
		for(pc=0;pc<Math.min(l1.size() ,l2.size());pc++)
		{
			if(l1.get(pc)!=l2.get(pc))
				break;
		}
		return l1.get(pc-1);
	}
	Boolean getPath(Node root, int key, List<Integer> l1) {
		if(root==null)
			return false;
		l1.add(root.data);
		if(root.data==key)
			return true; 
		if(getPath(root.left,key,l1)||getPath(root.right,key,l1))
		return true;
		l1.remove(new Integer(root.data));
		return false;
	}
	public static void main(String[] args) {
		LCA a=new LCA();
		 Node root=new Node(1);
		 root.left=new Node(2);
		 root.right=new Node(3);
		 root.left.left=new Node(4);
		 root.left.right=new Node(5);
		 root.right.left=new Node(6);
		 root.right.right=new Node(7);
		 int n1=7;
		 int n2=6;
		 int ans=a.lca(root, n1, n2);
		 if(ans==-1)
			 System.out.println("doesnt exist");
		 else
			 System.out.println(ans);

	}

}
