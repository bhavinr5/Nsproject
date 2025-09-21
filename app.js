// Basic Cipher Tool JavaScript
// Encryption and Decryption functions

// Navigation functions
function showToolPage() {
    document.getElementById('info-page').style.display = 'none';
    document.getElementById('tool-page').style.display = 'block';
}

function showInfoPage() {
    document.getElementById('tool-page').style.display = 'none';
    document.getElementById('info-page').style.display = 'block';
}

function encryptCaesar() {
    var text = document.getElementById('caesar-text').value;
    var shift = parseInt(document.getElementById('caesar-shift').value);
    var result = '';
    
    if (!text) {
        alert('Please enter text to encrypt!');
        return;
    }
    
    if (!shift || shift < 1 || shift > 25) {
        alert('Please enter a shift value between 1 and 25!');
        return;
    }
    
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        
        if (char >= 'A' && char <= 'Z') {
            // Uppercase letters
            var newChar = String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
            result += newChar;
        } else if (char >= 'a' && char <= 'z') {
            // Lowercase letters
            var newChar = String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
            result += newChar;
        } else {
            // Non-alphabetic characters stay the same
            result += char;
        }
    }
    
    document.getElementById('caesar-result').value = result;
}

function decryptCaesar() {
    var text = document.getElementById('caesar-text').value;
    var shift = parseInt(document.getElementById('caesar-shift').value);
    var result = '';
    
    if (!text) {
        alert('Please enter text to decrypt!');
        return;
    }
    
    if (!shift || shift < 1 || shift > 25) {
        alert('Please enter a shift value between 1 and 25!');
        return;
    }
    
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        
        if (char >= 'A' && char <= 'Z') {
            // Uppercase letters - shift backward
            var newChar = String.fromCharCode(((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65);
            result += newChar;
        } else if (char >= 'a' && char <= 'z') {
            // Lowercase letters - shift backward
            var newChar = String.fromCharCode(((char.charCodeAt(0) - 97 - shift + 26) % 26) + 97);
            result += newChar;
        } else {
            // Non-alphabetic characters stay the same
            result += char;
        }
    }
    
    document.getElementById('caesar-result').value = result;
}

function encryptVigenere() {
    var text = document.getElementById('vigenere-text').value;
    var key = document.getElementById('vigenere-key').value.toUpperCase();
    var result = '';
    
    if (!text) {
        alert('Please enter text to encrypt!');
        return;
    }
    
    if (!key) {
        alert('Please enter a key!');
        return;
    }
    
    var keyIndex = 0;
    
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        
        if (char >= 'A' && char <= 'Z') {
            // Uppercase letters
            var shift = key.charCodeAt(keyIndex % key.length) - 65;
            var newChar = String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
            result += newChar;
            keyIndex++;
        } else if (char >= 'a' && char <= 'z') {
            // Lowercase letters
            var shift = key.charCodeAt(keyIndex % key.length) - 65;
            var newChar = String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
            result += newChar;
            keyIndex++;
        } else {
            // Non-alphabetic characters stay the same
            result += char;
        }
    }
    
    document.getElementById('vigenere-result').value = result;
}

function decryptVigenere() {
    var text = document.getElementById('vigenere-text').value;
    var key = document.getElementById('vigenere-key').value.toUpperCase();
    var result = '';
    
    if (!text) {
        alert('Please enter text to decrypt!');
        return;
    }
    
    if (!key) {
        alert('Please enter a key!');
        return;
    }
    
    var keyIndex = 0;
    
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        
        if (char >= 'A' && char <= 'Z') {
            // Uppercase letters - shift backward
            var shift = key.charCodeAt(keyIndex % key.length) - 65;
            var newChar = String.fromCharCode(((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65);
            result += newChar;
            keyIndex++;
        } else if (char >= 'a' && char <= 'z') {
            // Lowercase letters - shift backward
            var shift = key.charCodeAt(keyIndex % key.length) - 65;
            var newChar = String.fromCharCode(((char.charCodeAt(0) - 97 - shift + 26) % 26) + 97);
            result += newChar;
            keyIndex++;
        } else {
            // Non-alphabetic characters stay the same
            result += char;
        }
    }
    
    document.getElementById('vigenere-result').value = result;
}

console.log('Cipher tool with encrypt and decrypt functions loaded successfully!');