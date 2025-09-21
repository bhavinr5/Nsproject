// Basic Cipher Tool JavaScript with Encrypt and Decrypt

// Caesar Cipher Functions
function encryptCaesar() {
    var text = document.getElementById('caesar-text').value;
    var shift = parseInt(document.getElementById('caesar-shift').value);
    
    if (!text || !shift) {
        alert('Please enter both text and shift value!');
        return;
    }
    
    var result = caesarShift(text, shift);
    document.getElementById('caesar-result').value = result;
}

function decryptCaesar() {
    var text = document.getElementById('caesar-text').value;
    var shift = parseInt(document.getElementById('caesar-shift').value);
    
    if (!text || !shift) {
        alert('Please enter both text and shift value!');
        return;
    }
    
    var result = caesarShift(text, -shift); // Negative shift for decryption
    document.getElementById('caesar-result').value = result;
}

function caesarShift(text, shift) {
    var result = '';
    
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        
        if (char >= 'A' && char <= 'Z') {
            // Uppercase letters
            var newChar = String.fromCharCode(((char.charCodeAt(0) - 65 + shift + 26) % 26) + 65);
            result += newChar;
        } else if (char >= 'a' && char <= 'z') {
            // Lowercase letters
            var newChar = String.fromCharCode(((char.charCodeAt(0) - 97 + shift + 26) % 26) + 97);
            result += newChar;
        } else {
            // Non-alphabetic characters stay the same
            result += char;
        }
    }
    
    return result;
}

// Vigenere Cipher Functions
function encryptVigenere() {
    var text = document.getElementById('vigenere-text').value;
    var key = document.getElementById('vigenere-key').value.toUpperCase();
    
    if (!text || !key) {
        alert('Please enter both text and key!');
        return;
    }
    
    var result = vigenereShift(text, key, true); // true for encryption
    document.getElementById('vigenere-result').value = result;
}

function decryptVigenere() {
    var text = document.getElementById('vigenere-text').value;
    var key = document.getElementById('vigenere-key').value.toUpperCase();
    
    if (!text || !key) {
        alert('Please enter both text and key!');
        return;
    }
    
    var result = vigenereShift(text, key, false); // false for decryption
    document.getElementById('vigenere-result').value = result;
}

function vigenereShift(text, key, encrypt) {
    var result = '';
    var keyIndex = 0;
    
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        
        if (char >= 'A' && char <= 'Z') {
            // Uppercase letters
            var shift = key.charCodeAt(keyIndex % key.length) - 65;
            if (!encrypt) shift = -shift; // Negative shift for decryption
            var newChar = String.fromCharCode(((char.charCodeAt(0) - 65 + shift + 26) % 26) + 65);
            result += newChar;
            keyIndex++;
        } else if (char >= 'a' && char <= 'z') {
            // Lowercase letters
            var shift = key.charCodeAt(keyIndex % key.length) - 65;
            if (!encrypt) shift = -shift; // Negative shift for decryption
            var newChar = String.fromCharCode(((char.charCodeAt(0) - 97 + shift + 26) % 26) + 97);
            result += newChar;
            keyIndex++;
        } else {
            // Non-alphabetic characters stay the same
            result += char;
        }
    }
    
    return result;
}
