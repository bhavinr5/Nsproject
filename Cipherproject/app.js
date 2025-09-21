// Basic Cipher Tool JavaScript
// Simple encryption functions

function encryptCaesar() {
    var text = document.getElementById('caesar-text').value;
    var shift = parseInt(document.getElementById('caesar-shift').value);
    var result = '';
    
    if (!text || !shift) {
        alert('Please enter both text and shift value!');
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

function encryptVigenere() {
    var text = document.getElementById('vigenere-text').value;
    var key = document.getElementById('vigenere-key').value.toUpperCase();
    var result = '';
    
    if (!text || !key) {
        alert('Please enter both text and key!');
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

console.log('Cipher tool loaded successfully!');