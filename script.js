// Search Functionality
function searchBlog() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    if (input.trim() === '') {
        alert("Please enter a search term.");
        return;
    }
    
    // Redirect to the blog page with the search query
    window.location.href = `blog.html?search=${encodeURIComponent(input)}`;
}

// Check for search parameter on page load
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search');
    
    if (searchTerm && window.location.pathname.includes('blog.html')) {
        document.getElementById('searchInput').value = searchTerm;
        performSearch(searchTerm);
    }
});

function performSearch(searchTerm) {
    let posts = document.querySelectorAll('.blog-post p, .comments .comment');
    let found = false;

    posts.forEach(post => {
        let postText = post.textContent.toLowerCase();
        if (postText.includes(searchTerm)) {
            post.style.backgroundColor = 'yellow';
            found = true;
            if (!found) {
                post.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            post.style.backgroundColor = '';
        }
    });

    if (!found) {
        alert("No matches found.");
    }
}