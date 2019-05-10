window.addEventListener('ratingChange', addNewNoteToHistory);

function addNewNoteToHistory(e) {
    // new note's components
    var historySection = document.querySelector('.sidebar__history ul'),
    noteContainer = document.createElement('li'),
    noteIcon = document.createElement('i'),
    noteTextContainer = document.createElement('div'),
    noteParagraph = document.createElement('p'),
    noteAuthor = document.createElement('b'),
    noteTitle = document.createElement('b'),
    noteTime = document.createElement('span');

    noteIcon.className = 'far fa-clock';
    noteTextContainer.className = 'sidebar__history-text';
    noteAuthor.className = 'sidebar__history-author';
    noteTitle.className = 'sidebar__history-title';
    noteTime.className = 'sidebar__history-time';
    
    noteParagraph.innerHTML = 
        `You changed rating of 
        <b class="sidebar__history-title">${e.detail.changedBookName}</b> by 
        <b class="sidebar__history-author">${e.detail.changedBookAuthor}</b>`;
    noteTime.innerHTML = 'Just Now!';

    noteTextContainer.prepend(noteTime);
    noteTextContainer.prepend(noteParagraph);
    noteContainer.prepend(noteTextContainer);
    noteContainer.prepend(noteIcon);

    historySection.prepend(noteContainer);
}