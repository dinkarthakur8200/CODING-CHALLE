// Step-by-Step Approach:

// 1 = We Define the input string variable.
// 2 =We Create a function to reverse the string.
// 3 = We Use setTimeout() to delay the execution of the reversal function by 2 seconds.
// 4 = Inside the delayed function, I'm going to reverse the string and print the result.
const input = "DINKAR THAKUR ! ,Learning at PW SKILL "  
// Defing the function to reverse the string 
function reverseString(str){
    return str.split('').reverse().join('');
}
// Decalre the settimeout function 
setTimeout(()=>{
    const reversed = reverseString(input);
    console.log(reversed);
}, 2000 ); 


