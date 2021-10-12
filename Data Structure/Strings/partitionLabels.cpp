/*
Leetcode problem

763. Partition Labels

You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Return a list of integers representing the size of these parts.


Example 1:

Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]

Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
Example 2:

Input: s = "eccbbbbdec"
Output: [10]


*/

#include <bits/stdc++.h>
using namespace std;

void print_vector(vector<int> v){
	cout << "[";
	for(int i = 0; i<v.size(); i++){
		cout << v[i] << ", ";
	}
	cout << "]"<<endl;
}

class Solution {
	public:
		vector<int> partitionLabels(string s) {
			map <char, int> cnt;
			for(int i = 0; i < s.size(); i++) cnt[s[i]] = i;
			int j = 0, start = 0;
			int i = 0;
			int n = s.size();
			vector <int> ans;
			while(i < n){
				j = max(j, cnt[s[i]]);
				if( i == j){
					ans.push_back(i-start+ 1);
					start = i + 1;
				}
				i++;
			}
			return ans;
		}
};

int main(){
	Solution ob;
	print_vector(ob.partitionLabels("ababcbacadefegdehijhklij"));
}
