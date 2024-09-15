// Search Functionality
function searchBlog() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let comments = document.querySelectorAll('.comment');
    let found = false;

    comments.forEach(comment => {
        let commentText = comment.textContent.toLowerCase();
        if (commentText.includes(input)) {
            comment.style.backgroundColor = 'yellow'; // Highlight the matching comment
            found = true;
        } else {
            comment.style.backgroundColor = ''; // Reset if it doesn't match
        }
    });

    if (!found) {
        alert("No matching comments found.");
    }
}

// Adding new comments
function addComment() {
    let commentInput = document.getElementById('commentInput').value;
    let commentSection = document.querySelector('.comment-box');

    if (commentInput.trim()) {
        // Create new comment element
        let newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `<strong>NewUser:</strong> ${commentInput}`;
        
        // Add new comment to the section
        commentSection.insertBefore(newComment, commentSection.firstChild);

        // Clear input field
        document.getElementById('commentInput').value = '';
    } else {
        alert('Please enter a valid comment.');
    }
}
