const title_element = document.querySelector("#noteTitle");
const body_element = document.querySelector("#noteBody");
const button_element = document.querySelector("#createNoteBtn");
const list_element = document.querySelector("#notesContainer");

// retrieve notes from local storage
let notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
    notes.forEach(create_note);
}


// create note
button_element.addEventListener("click", function() {
    create_note();
});


// create note elements
function create_note(note) {

    let title = title_element.value;
    let body = body_element.value;

    if (note) {
        title = note.title;
        body = note.body;
    }

    if (title == "" || body == "") {
        alert("Please enter a title and body.");
        return;
    }

    const item = document.createElement("div");
    item.classList.add("note-card");

    item.innerHTML = `
        <div class="note-header">
            <span class="note-title">${title}</span>
            <span class="note-date">${new Date().toLocaleDateString()}</span>
        </div>

        <div class="note-body">${body}</div>
    `;

    list_element.appendChild(item);

    // edit button
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    item.appendChild(editBtn);

    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    item.appendChild(deleteBtn);


    // edit button event
    editBtn.addEventListener("click", function() {

        title_element.value = title;
        body_element.value = body;

        item.remove();

        updateLocalStorage();
    });


    // delete button event
    deleteBtn.addEventListener("click", function() {

        item.remove();

        updateLocalStorage();
    });


    title_element.value = "";
    body_element.value = "";

    updateLocalStorage();
}


// store notes in local storage
function updateLocalStorage() {

    notes = [];

    const items = document.querySelectorAll(".note-card");

    items.forEach(function(item) {

        notes.push({
            title: item.querySelector(".note-title").innerText,
            body: item.querySelector(".note-body").innerText
        });

    });

    localStorage.setItem("notes", JSON.stringify(notes));
}