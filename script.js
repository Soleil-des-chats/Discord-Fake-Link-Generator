document.getElementById('link-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const url = document.getElementById('url').value;
    
    const markdownLink = `[${title}](${url})`;
    
    document.getElementById('output').textContent = markdownLink;
});
