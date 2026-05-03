function maskEmail(email) {
    
    const atIndex = email.indexOf('@');

   
    const username = email.slice(0, atIndex);
    const domain = email.slice(atIndex);
    
    const len = username.length;

   
    if (len <= 2) {
        return username + domain;
    }

    
    const firstChar = username[0];
    const lastChar = username[len - 1];

    
    const asteriskCount = len - 2;
    
    
    const mask = '*'.repeat(asteriskCount);

    
    return firstChar + mask + lastChar + domain;
}


const email = "myEmail@email.com";


console.log(maskEmail(email));
