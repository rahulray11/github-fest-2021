'''
Binary Search

This helps in searching a key in an array
in O(log(N)) time.
'''

arr = [1,2,2,3,6,6,7,9,10]
start = 0
end = len(arr)-1
key = 3

mid = (start+end)//2
found = False

while start<=end:
    if arr[mid]==key:
        found = True
        break
    elif arr[mid]>key:
        end = mid-1
    else:
        start = mid+1
    mid = (start+end)//2

if found:
    print("Key found at index:", mid)
else:
    print("Key not found..")
