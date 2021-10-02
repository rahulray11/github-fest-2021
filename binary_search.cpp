//Binary Search. Call this function in main() to use.

#include <bits/stdc++.h>
using namespace std;
//num is the number to find in the array. l and r are left most and right most element of array.
int binarySearch(int arr[], int l, int r, int num)
{
	if (r >= l) {
		int mid = l + (r - l) / 2;

		// If the element is in middle already
		if (arr[mid] == num)
			return mid;

		// If element is smaller than x then check left subarray
		if (arr[mid] > num)
			return binarySearch(arr, l, mid - 1, num);

		// Else check the right subarray
		return binarySearch(arr, mid + 1, r, num);
	}

	// If element is not present return -1
	return -1;
}
