document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent page refresh
        let section = event.target.innerText;
        loadContent(section);
    });
});

function loadContent(section) {
    const content = document.getElementById('content');
    switch (section) {
        case 'HTML':
            content.innerHTML = '<h2>Learn HTML</h2><p>This is the HTML tutorial content.</p>';
            break;
        case 'CSS':
            content.innerHTML = '<h2>Learn CSS</h2><p>This is the CSS tutorial content.</p>';
            break;
        case 'JavaScript':
            content.innerHTML = '<h2>Learn JavaScript</h2><p>This is the JavaScript tutorial content.</p>';
            break;
        case 'Python':
            content.innerHTML = '<h2>Learn Python</h2><p>This is the Python tutorial content.</p>';
            break;
        default:
            content.innerHTML = '<h2>Welcome to Your Learning Platform</h2><p>This is where you will add tutorials and articles.</p>';
    }
}
