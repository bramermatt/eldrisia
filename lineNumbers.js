function addLineNumbers(text) {
    const lines = text.split('\n');
    const lineNumbersDiv = document.getElementById('lineNumbers');
    const textDiv = document.getElementById('plainText');

    lineNumbersDiv.innerHTML = lines.map((_, index) => `${index + 1}`).join('\n');
    textDiv.textContent = text;
}



addLineNumbers(plainText);