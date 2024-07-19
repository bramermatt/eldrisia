function searchText() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const text = document.getElementById('eldrisiaConversation').innerText.toLowerCase();
    const resultsDiv = document.getElementById('results');

    if (input) {
        const index = text.indexOf(input);
        if (index !== -1) {
            const highlightedText = text.substring(0, index) +
                '<mark>' + text.substring(index, index + input.length) + '</mark>' +
                text.substring(index + input.length);

            resultsDiv.innerHTML = `<p>Found at position ${index}:</p><p>${highlightedText}</p>`;
        } else {
            resultsDiv.innerHTML = '<p>No matches found.</p>';
        }
    } else {
        resultsDiv.innerHTML = '<p>Please enter a search term.</p>';
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        searchText();
    }
}