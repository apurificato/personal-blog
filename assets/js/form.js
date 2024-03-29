// Select the form element

const friendForm = document.querySelector('#friend-form')

/**
    Create a function that triggers when the submit event occurs

        - Stop/Prevent the page from refreshing
        - Grab the input value from our name input (what they typed into the box)
        - Grab all the names that have already been stored to local storage
        - Add the new name to the names
        - Overwrite the old names value in local storage with the newly updated names
        - Send the user to the View Friends page
 */

function addFriend(eventObj) {
    //- Stop/Prevent the page from refreshing
    eventObj.preventDefault()

    //- Grab the input value from our name input (what they typed into the box)
    const nameValue = friendForm.username.value
    console.log(nameValue)

    // - Grab all the names that have already been stored to local storage
    const raw = localStorage.getItem('friends')
    const names = JSON.parse(raw) || []

    console.log(names)

    //- Add the new name to the names
    names.push(nameValue)

    // - Overwrite the old names value in local storage with the newly updated names
    localStorage.setItem('friends', JSON.stringify(names))

    // - Send the user to the View Friends page
    window.location = 'view.html'
}


// Create a submit event listener for the form

// Wrap all initial starting listeners and any code that needs to run when the page loads in a function(initializing function)

function init() {
    friendForm.addEventListener('submit', addFriend)
    // Create a submit event listener for the form
}

init()

// localStorage.setItem('num', 10)
// localStorage.setItem('bool', true)

// console.log(bool === 'true' && true)



// when working with local storage, when you store an array, you stringify it and then when you are retrieving the array you parse (both of these using JSON). Examples are: JSON.stringify() and JSON.parse()