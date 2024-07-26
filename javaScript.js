// const passwordBox = document.getElementById("password")

// const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// const lowercase="abcdefghijklmnopqrstuvwxyz"
// const digits="0123456789"
// const specialChars="!@#$%^&*()_+-={}:<>?"
// const length=16;


// const allChars = uppercase + lowercase + digits + specialChars

// function passwordGenerator() {
//     let password=""

//     password += uppercase[Math.floor(Math.random() * uppercase.length)];
//     password += lowercase[Math.floor(Math.random() * lowercase.length)];
//     password += digits[Math.floor(Math.random() * digits.length)];
//     password += specialChars[Math.floor(Math.random() * specialChars.length)];

    
    
//     for ( i=0; i<length; i++){
//         password += allChars[Math.floor(Math.random() * allChars.length)];
//     }
    
//     // while(length > password.length){
//     //     password += allChars[Math.floor(Math.random() * allChars.length)]
//     // }
//     passwordBox.value = password

//     return password;
   
// }

// console.log(passwordGenerator())


const passwordBox = document.getElementById("password")
const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}:<>?"

function passwordGenerator() {
    let password=""
    const length=12;


    for ( i=0; i<length; i++){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password
    return password;

}

console.log(passwordGenerator())
