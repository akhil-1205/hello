const input = document.getElementById("input")

function reverseString(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value;
    
    if (value == reverseString(value)) {
        alert("Palindrome")
    } else {
        alert("Not Palindrome")
    }
}

