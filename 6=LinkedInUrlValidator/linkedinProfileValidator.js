function validateLinkedInURL(url) {
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}$/;
    if (regex.test(url)) {
        console.log("Valid LinkedIn profile URL.");
    } else {
        console.log("Invalid LinkedIn profile URL.");
    }
}

// Test the  funciton ...
validateLinkedInURL("https://www.linkedin.com/in/dinkar-thakur-1a1710245/")
validateLinkedInURL("https://www.linkedin.com/in/johndoe123"); // Valid LinkedIn profile URL.
validateLinkedInURL("https://www.linkedin.com/in/jane_doe"); // Valid LinkedIn profile URL.
validateLinkedInURL("https://www.linkedin.com/in/invalid-url!"); // Invalid LinkedIn profile URL.
validateLinkedInURL("https://www.linkedin.com/in/short"); // Invalid LinkedIn profile URL.
