// lets store the delay variable in let

let delay = 3000 ; 

 function genrateRandomNumber(){
    return Math.floor(Math.random()*100 ) +1 ;
}
// Progress indication 
console.log("Starting the random number generation Process...");
// Using the set-timeout 
setTimeout(()=>{
    console.log("3 Seconds have passed , Generating the number ...");
    const randomNumber = genrateRandomNumber();
    console.log(`Random number genrated : ${randomNumber}`);
},delay);
// Progress Update during the wait ...
console.log("Waiting for 1 seconds...");
setTimeout(()=>{console.log("Waiting for 2 second...")},1000);
setTimeout(()=>{console.log("Waiting for 3 second...")},2000);