// Program to find whether a String is Palindrome or not

//Lets create a Function 
function checkPalindrome(str){
  
  //here we are spliting the string 
  const strValues = str.split("");
  
  //reverse the splitted string 
  const reverseValues = strValues.reverse();
  
  //then join the reversed string
  const reverseString = reverseValues.join("");
  
  
  //if reverseStr and str are same then palindrome
  if(reverseString === str){
    console.log(`The Given string ${str} is Palindrome`);
    }
    else{
    console.log(`The Given string  ${str} is not Palindrome`);
    }
}


//Taking the input from the user
const string = prompt("Enter the string to check");

//Calling the Function 
checkPalindrome(string);
