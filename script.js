let checkInputForPalindrome = () => {
    let compareArr = document.getElementById("userInput").value;
    compareArr = compareArr.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');
    if (compareArr == document.getElementById("userInput").value.toLowerCase().replace(/[\W_]/g, '')) {
        alert("Your phrase is a palindrome!");
    } else {
        alert("Your phrase is NOT a palindrome!");
    }
}