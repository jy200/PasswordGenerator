const upper = document.getElementById('inputUpper');
const lower = document.getElementById('inputLower');
const special = document.getElementById('inputSpecial');
const submitButton = document.getElementById('submit');
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var charList = '0123456789'
const specialLetters = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
const copyButton = document.getElementById('copy');
copyButton.style.display= 'none';
submitButton.addEventListener('click', ()=>{
    generatePassword();
});
copyButton.addEventListener('click', ()=>{
    copyPassword();
});

// const charList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
function generatePassword(){
    if (upper.checked) {
        charList += upperLetters;
    }
    if (lower.checked){
        charList += lowerLetters;
    }
    if (special.checked){
        charList += specialLetters;
    }
    let password = ''
    const passLength = parseInt(document.getElementById('inputNumber').value);
    // console.log(charList);
    // console.log(passLength)
    for (let i=0;i < passLength; i++){
        const randIndex = Math.floor(Math.random()*charList.length)
        password += charList[randIndex];
    };
    // console.log(password)
    document.getElementById('pass').textContent = password;
    copyButton.style.display = "inline"
};

function copyPassword(){
    const password = document.getElementById('pass')
    navigator.clipboard.writeText(password.textContent);
};