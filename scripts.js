document.getElementById('add-note-btn').addEventListener('click', addNote);

function addNote() {
    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;

    if (title === '' || content === '') {
        alert('Please add both a title and content for the note.');
        return;
    }

    const noteList = document.getElementById('notes');
    const noteItem = document.createElement('li');
    noteItem.innerHTML = `
        <strong>${title}</strong>
        <p>${content}</p>
        <button onclick="deleteNote(this)">Delete</button>
    `;

    noteList.appendChild(noteItem);

    document.getElementById('note-title').value = '';
    document.getElementById('note-content').value = '';
}

function deleteNote(button) {
    const noteItem = button.parentElement;
    noteItem.remove();
}
