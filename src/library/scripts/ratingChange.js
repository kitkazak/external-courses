window.addEventListener('ratingChange', addNewNoteToHistory);

function addNewNoteToHistory(e) {
    var historySection = document.querySelector('.sidebar__history ul'),
        newNote = document.createElement('li');

    newNote.innerHTML = 
    `
    <i class="far fa-clock"></i>
    <div class="sidebar__history-text">
        <p>
            You changed rating of
            <b class="sidebar__history-title">${e.detail.changedBookName}</b>
            by
            <b class="sidebar__history-author">${e.detail.changedBookAuthor}</b>
        </p>
        <span class="sidebar__history-time">
            Just Now!
        </span>
    </div>
    `;

    historySection.prepend(newNote);
}