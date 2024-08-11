function validateUrl(url){
    const urlPattern = /^https?:\/\/[\w\-\.\/]+$/;
    if(urlPattern.test(url)){
        console.log("Valid Url");
    }else{
        console.log("Invalid Url");
    }
}

// test function .. .
validateUrl("https://www.example.com");
validateUrl("http://invalid url");