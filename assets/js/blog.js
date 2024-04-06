// Select the ul from the DOM
const blogsOutput = document.querySelector('ul')

// Select all delete buttons from the DOM
const deleteBtns = document.querySelectorAll('.delete-btn')

console.log(deleteBtns)

// Grab the blog data from localStorage
const raw = localStorage.getItem('blogs')
let blogs = JSON.parse(raw) || []

// Recieve the delete button element
function removeBlog(btnObj) {
    // Get the parent element of the button
    const parent = btnObj.parentElement 
    // Get the text of the button (used to retrieve the name)
    const para = parent.querySelector('p')
    const name = para.innerText
    // use the array filter method to filter the friends array out and remove the name matching the button text
    const filtered = blogs.filter(function (blog) {
        if (blog !== name) {
            return true
        }
    })

    blogs = filtered

    localStorage.setItem('blogs', JSON.stringify(blogs))

    // Overwrite the old names data in localstorage(stringify)
    // localStorage.removeItem('friends')
    // Remove the button's parent <li> from the DOM
    parent.remove()

    //If friends is empty, add the paragraph to our ul that says "no friends have been added"
    if (!blogs.length) {
        blogsOutput.innerHTML = '<p>No blog posts have been added yet.</p>'
    }
}

// function removeFriend(eventObj) {
//     console.log(eventObj.target.parentNode)

//     eventObj.target.parentNode.remove()
// }



// Create a function that loops over the names array and outputs an li to the ul for each name in the names array
function outputBlogs() {
    // If friends array is not empty, remove the no friends paragraph from the DOM
    if (blogs.length){
        blogsOutput.innerHTML = ''
    }

    for (let blog of blogs) {
        // Insert HTML into the friendsOutput Ul at the inside end (beforeend)
        blogsOutput.insertAdjacentHTML('beforeend', `
        <li class="row align-center">
        <p>${blog}</p>
        <button class="delete-btn">Delete</button>
        </li>
        `
        //remove onclick="removeFriend(event" from the code above
        )
    }
}

outputBlogs()

// Create an eventListener on all delete buttons so when clicked they remove that name from localstorage and also remove the li from the window.

document.body.addEventListener('click', function (eventObj) {
    const el = eventObj.target
    // console.log(el.classList.contains("delete-btn"))
    
    // check if the element that was clicked was the delete button (use the classList to see if the element has a class of delete-btn).
    if (el.classList.contains('delete-btn')) {
    // when a delete button is clicked, pass the element to the remove friend function.
        removeBlog(el)
    }
})

// const fruits = ['orange', 'apple', 'grape']

// fruits.forEach(function (item) {
//     console.log(item)
// })

// forEach won't allow you to break out of loop; it goes over every single item in the array and passes the index for each. forEach is a shorter version of a for loop

// for (let fruit of fruits) {
//     console.log(fruit)

//     if (fruit === 'apple') {
//         break;
//     }
// }
// standard for and for of loop, you can break out after a point (same for while loop)

// const filteredArr = fruits.filter(function (fruit) {
//     if (fruit !=='apple') {
//         return true
//     }
// })
// // this removes the item from the array, doesn't allow it to display, filters it out, displays the others.
// console.log(filteredArr)