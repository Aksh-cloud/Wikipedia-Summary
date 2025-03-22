document.getElementById('searchBtn').addEventListener('click', async () => {
    const query = document.getElementById('query').value.trim();
    const resultDiv = document.getElementById('result');

    if (!query) {
        resultDiv.innerHTML = 'Please enter a topic.';
        return;
    }

    try {
        const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`);
        const data = await response.json();

        if (data.title === 'Not found.') {
            resultDiv.innerHTML = 'Page not found.';
        } else {
            resultDiv.innerHTML = data.extract;
        }
    } catch (error) {
        resultDiv.innerHTML = 'An error occurred: ' + error.message;
    }
});

document.getElementById('themeToggle').addEventListener('click', () => {
    const body = document.body;
    const container = document.querySelector('.container');
    const input = document.getElementById('query');
    const buttons = document.querySelectorAll('button');
    
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    container.classList.toggle('dark-mode');
    container.classList.toggle('light-mode');
    input.classList.toggle('dark-mode');
    input.classList.toggle('light-mode');
    buttons.forEach(button => button.classList.toggle('dark-mode'));
    buttons.forEach(button => button.classList.toggle('light-mode'));
});
