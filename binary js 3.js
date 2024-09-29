function convert() {
    const binaryInput = document.getElementById('binaryInput').value;

    // Check if the input is a valid binary number
    if (/^[01]+$/.test(binaryInput)) {
        // Convert binary to decimal
        const decimalValue = parseInt(binaryInput, 2);

        // Convert decimal to hexadecimal and octal
        const hexValue = decimalValue.toString(16).toUpperCase();
        const octalValue = decimalValue.toString(8);

        // Display results
        document.getElementById('decimalOutput').innerText = decimalValue;
        document.getElementById('hexOutput').innerText = hexValue;
        document.getElementById('octalOutput').innerText = octalValue;
    } else {
        alert('Please enter a valid binary number!');
    }
}
