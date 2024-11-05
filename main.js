const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Show notes fromlocalStorage
function showNotes() {
    notesContainer.innerHTML =localStorage.getItem("notes") || ""; // Load notes fromlocalStorage
}
showNotes();

// UpdatelocalStorage whenever there is a change
function updateStorage() {
   localStorage.setItem("notes", notesContainer.innerHTML); // Save the current state of the container
}

// Event listener for creating a new note
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p"); // Create a new paragraph element
    let img = document.createElement("img"); // Create delete icon
    inputBox.className = "input-box"; // Add appropriate class
    inputBox.setAttribute("contenteditable", "true"); // Allow the note to be editable
    img.src = "images/delete.png"; // Set the delete icon image
    img.className = "delete-icon"; // Optional class for styling

    // Append the delete icon inside the paragraph
    inputBox.appendChild(img);
    
    // Append the note to the container
    notesContainer.appendChild(inputBox); 

    // Add keyup listener for the newly created note to update storage on edit
    inputBox.addEventListener("keyup", updateStorage);

    updateStorage(); // Update storage after note creation
});

// Delete a note or listen for editing
notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove(); // Remove the note when delete icon is clicked
        updateStorage(); // Update storage after deletion
    }
});

// Prevent the default behavior of "Enter" adding a new element, and insert a line break instead
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak"); // Insert line break in editable note
        event.preventDefault(); // Prevent default behavior of creating a new element
    }
});





















































/*
const notesContainer = document.querySelector(".notes-container"); // Fix the container selector
const createBtn = document.querySelector(".btn");
let notes  = document.querySelectorAll(".input-box"); // Fix the selector for input-box

function showNotes(){
    notesContainer.innerHTML =localStorage.getItem("notes") || ""; // Ensure notes are loaded
}
showNotes();

function updateStorage() {
   localStorage.setItem("notes", notesContainer.innerHTML); // UpdatelocalStorage
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p"); // Create paragraph element for the note
    let img = document.createElement("img"); // Create image for the delete icon
    inputBox.className = "input-box"; // Add the appropriate class
    inputBox.setAttribute("contenteditable", "true"); // Make the input box editable
    img.src = "images/delete.png"; // Set the delete icon source
    img.className = "delete-icon"; // Optionally add a class for styling
    const noteWrapper = document.createElement("div"); // Wrap the note and delete icon in a div for better structure
    noteWrapper.appendChild(inputBox);
    noteWrapper.appendChild(img);
    notesContainer.appendChild(noteWrapper); // Append the entire wrapper to the container
    updateStorage(); // Update storage after creating the note
});

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove(); // Remove the note on clicking the delete icon
        updateStorage(); // Update the storage after deletion
    }
    else if(e.target.tagName === "P"){ // Ensure it's a paragraph tag
       notes = document.querySelectorAll(".input-box");
       notes.forEach(nt => {
         nt.onkeyup = function(){
            updateStorage(); // Update storage when editing the note
         };
       });
    }
});

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak"); // Insert line break on Enter key
        event.preventDefault(); // Prevent default behavior of adding a new element
    }
});

*/