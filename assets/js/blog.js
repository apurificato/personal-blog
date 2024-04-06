// Select the ul from the DOM
const blogsOutput = document.querySelector('ul');

// Grab the blog data from localStorage
const raw = localStorage.getItem('blogs');
const blogs = JSON.parse(raw) || [];

// Recieve the delete button element
function removeBlog(btnObj) {
    const parent = btnObj.parentElement;
    const para = parent.querySelector('.title');
    const title = para.innerText;

    const filtered = blogs.filter(function (blog) {
        return blog.title !== title;
    });

    localStorage.setItem('blogs', JSON.stringify(filtered));

    parent.remove();

    if (!filtered.length) {
        blogsOutput.innerHTML = '<p>No blog posts have been added yet.</p>';
    }
}

// Create a function that loops over the blogs array and outputs an li to the ul for each title in the blogs array
function outputBlogs() {
    if (blogs.length) {
        blogsOutput.innerHTML = '';
    }

    for (let blog of blogs) {
        blogsOutput.insertAdjacentHTML('beforeend', `
            <li class="row align-center">
                <p class="title">${blog.title}</p>
                <p class="content">${blog.content}</p>
                <p class="username">Post written by ${blog.username}</p>
                <button class="delete-btn">Delete</button>
            </li>
        `);
    }
}

outputBlogs();

// Create an eventListener on all delete buttons so when clicked they remove that blog from localstorage and also remove the li from the window.
document.body.addEventListener('click', function (eventObj) {
    const el = eventObj.target;

    if (el.classList.contains('delete-btn')) {
        removeBlog(el);
    }
});
