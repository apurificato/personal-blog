// JAVASCRIPT FOR USING THE FORM AND INPUTTING DATA ON THE MAIN/FRONT PAGE

// Select the form element
const blogForm = document.querySelector('#blog-form');

function addBlogs(eventObj) {
    eventObj.preventDefault();

    const usernameValue = blogForm.username.value;
    const titleValue = blogForm.postTitle.value;
    const contentValue = blogForm.postText.value;

    const raw = localStorage.getItem('blogs');
    const blogs = JSON.parse(raw) || [];

    const blog = {
        username: usernameValue,
        title: titleValue,
        content: contentValue
    };

    blogs.push(blog);

    localStorage.setItem('blogs', JSON.stringify(blogs));

    // Redirect to blog.html
    window.location.href = 'blog.html';
}

// Create a submit event listener for the form
function init() {
    blogForm.addEventListener('submit', addBlogs);
}

init();
