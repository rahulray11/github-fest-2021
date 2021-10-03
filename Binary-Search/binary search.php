<?php
// PHP program to implement
// recursive Binary Search  
function binarySearch($arr, $l, $r, $x)
{
if ($r >= $l)
{
        $mid = ceil($l + ($r - $l) / 2);
  
        
        if ($arr[$mid] == $x) 
            return floor($mid);
  
        
        if ($arr[$mid] > $x) 
            return binarySearch($arr, $l, 
                                $mid - 1, $x);
  
        
        return binarySearch($arr, $mid + 1, 
                            $r, $x);
}
  

return -1;
}
  

$arr = array(2, 3, 4, 10, 40);
$n = count($arr);
$x = 10;
$result = binarySearch($arr, 0, $n - 1, $x);
if(($result == -1))
echo "Element is not present in array";
else
echo "Element is present at index ",
                            $result;
                              

?>
