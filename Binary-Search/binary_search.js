<script>
let recursiveFunction = function (arr, x, start, end) {
	

	if (start > end) return false;                					// Base case 


	let mid=Math.floor((start + end)/2);                	// Finds the middle index

	// Compare mid with given key x
	if (arr[mid]===x) return true;
		

	if(arr[mid] > x)
		return recursiveFunction(arr, x, start, mid-1);     	// If element at mid is greater than x,
		                                                    	// search in the left half of mid
	else


		return recursiveFunction(arr, x, mid+1, end);
}                                                          		// If element at middle is smaller than x,
		                                                          // search in the right half of middle

 
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (recursiveFunction(arr, x, 0, arr.length-1))

	document.write("Element found!<br>");
else
 document.write("Element not found<br>");

x = 6;

if (recursiveFunction(arr, x, 0, arr.length-1))
	document.write("Element found!<br>");
else
 document.write("Element not found!<br>");
</script>									
