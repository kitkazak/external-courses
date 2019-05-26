(function(){
    function View(controller) {
        this.controller = controller;

        var self = this;

        // DOM Elements
        this.$booksContainer = document.querySelector('.books__container');
        this.$filtersContainer = document.querySelector('.main__head-nav');
        this.$mainSearchForm = document.getElementById('main__search-form');
        this.$mainSearchInput = this.$mainSearchForm.querySelector('input');
        this.$sidebarHistory = document.querySelector('.sidebar__history ul');
        
        // Event handlers
        this.__handleRatingContainerClick = function(e) {
            if (e.target.tagName === 'UL' || e.target.tagName === 'DIV') return;
            var target = e.target;

            while (target.tagName !== 'LI') {
                target = target.parentNode;
            }

            var bookId = Number(target.closest('.book').getAttribute('data-book-id')),
            currentBook = controller.getBookById(bookId),
            stars = target.parentNode.querySelectorAll('li');

            var targetStarIndex;
            for (let i = 0; i < stars.length; i++) {
                if (target === stars[i]) {
                    targetStarIndex = i + 1;
                }
            }
    
            if (targetStarIndex === currentBook.rating) {
                currentBook.rating = 0;
                this.replaceChild(
                    self.__renderRating(0),
                    this.querySelector('ul')
                )
            } else {
                currentBook.rating = targetStarIndex;
                this.replaceChild(
                    self.__renderRating(targetStarIndex),
                    this.querySelector('ul')
                )           
            }
            
            self.renderNewNoteToHistory({
                event: 'rating-change',
                title: currentBook.title,
                author: {
                    firstName: currentBook.author.firstName,
                    lastName: currentBook.author.lastName
                }
            })
        }

        this.__handleFiltersContainerClick = function(e) {
            if (e.target.tagName === 'UL') return;
            var target = e.target;

            while (target.tagName !== 'LI') {
                target = target.parentNode;
            }

            const classSelected = 'main__head-nav_selected';
            if (target.classList.contains(classSelected)) return;

            target.parentNode.querySelector(`.${classSelected}`)
            .classList.remove(classSelected);
            target.classList.add(classSelected);

            const filterName = target.getAttribute('data-filter');
            self.controller.setCurrentFilter(filterName);
            var filteredBooksArr = self.controller.filterBooks();
            self.renderBooks(filteredBooksArr);

            self.renderNewNoteToHistory({
                event: 'filter',
                filterName: 
                    (filterName === 'all') ? 'All Books' :
                    (filterName === 'recent') ? 'Most Recent' :
                    (filterName === 'popular') ? 'Most Popular' :
                    'Free Books'
            })
        }
        this.$filtersContainer.addEventListener('click', this.__handleFiltersContainerClick);

        this.__handleMainSearchFormSubmit = function(e) {
            e.preventDefault();
        }
        this.$mainSearchForm.addEventListener('submit', this.__handleMainSearchFormSubmit);

        this.__handleMainSearchInputInput = function(e) {
            var inputText = this.value;
            
            var filteredBooksArr = self.controller.filterBooksBySearch(inputText.split(' ').map(word => {
                return word.toLowerCase();
            }));

            if (inputText === '') filteredBooksArr = self.controller.filterBooks();

            self.renderBooks(filteredBooksArr);

            if (inputText !== '') {
                self.renderNewNoteToHistory({
                    event: 'search',
                    searchWords: inputText.split(' ').map((word, i) => {
                        if (i !== 0) {
                            return ' ' + word
                        }
                        return word
                    })
                })                
            }
        }
        this.$mainSearchInput.addEventListener('input', debounce(this.__handleMainSearchInputInput));
    }
    
    View.prototype.renderBooks = function(books) {
        this.$booksContainer.innerHTML = '';

        for (let i = 0; i < books.length; i++) {
            var book = this.createBook(books[i]);
            this.$booksContainer.appendChild(book);
        }
    }

    View.prototype.createBook = function(bookObj) {
        var book = document.createElement('div');
        book.classList.add('book');
        book.setAttribute('data-book-id', bookObj.id);

        book.innerHTML = 
        `
            <div class="book__cover">
                <img src="${bookObj.image_url}" alt="${bookObj.title}">
            </div>
            <h4 class="book__title">${bookObj.title}</h4>
            <span class="book__author">by ${bookObj.author.firstName} ${bookObj.author.lastName}</span> 
            <div class="book__rating"><div>
        `;

        var ratingContainer = book.querySelector('.book__rating');
        ratingContainer.appendChild(this.__renderRating(bookObj.rating));
        ratingContainer.addEventListener('click', this.__handleRatingContainerClick);
        
        return book;      
    }

    View.prototype.__renderRating = function(bookObjRating) {
        var rating = bookObjRating;
        ratingContainer = document.createElement('ul');

        for (let i = 0; i < 5; i++) {
            var starContainer = document.createElement('li');
            starIcon = document.createElement('i');
    
            starIcon.setAttribute('aria-hidden', 'true');
            starIcon.classList.add('fa-star');
            
            if (rating) {
                starIcon.classList.add('fa');
                rating--;
            } else {
                starIcon.classList.add('far');
            }
    
            starContainer.appendChild(starIcon);
            ratingContainer.appendChild(starContainer);
        }
    
        return ratingContainer;
    }

    View.prototype.renderNewNoteToHistory = function(noteDetails) {
        var note = document.createElement('li'),
            noteBirth = new Date();

        note.innerHTML =
        `
        <i class="far fa-clock"></i>
        <div class="sidebar__history-text">
            <p>
            </p>
            <span class="sibebar__history-time">
                Just now!
            </span>
        </div>
        `;

        var noteText = note.querySelector('p');

        if (noteDetails.event === 'rating-change') {
            noteText.innerHTML =
            `
            You changed rating of <b>${noteDetails.title}</b>  
            by <b>${noteDetails.author.firstName} ${noteDetails.author.lastName}</b>
            `
        } else 
        if (noteDetails.event === 'filter') {
            noteText.innerHTML = 
            `
            You filtered books by using <b>${noteDetails.filterName}</b>
            `
        } else
        if (noteDetails.event === 'search') {
            noteText.innerHTML =
            `
            You searched books by following words: <b>"${noteDetails.searchWords}"</b>
            `
        }

        var timeSpanElement = note.querySelector('span');

        var self = this;
        function renderNewTime(ms) {
            timeSpanElement.innerHTML = self.__generateSidebarHistoryNoteTime(ms);
        }

        setInterval(function() {
            renderNewTime((new Date()).getTime() - noteBirth.getTime())
        }, 1000);

        var allLiElements = this.$sidebarHistory.querySelectorAll('li');
        if (allLiElements.length !== 3) {
            this.$sidebarHistory.prepend(note)
        } else {
            this.$sidebarHistory.removeChild(
                allLiElements[2]
            );
            this.$sidebarHistory.prepend(note)
        }
    }

    View.prototype.__generateSidebarHistoryNoteTime = function(ms) {
        var time = this.__msToTime(ms);

        if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
            return 'Just now!'
        }

        var noteTime = '';
        if (time.hours !== 0) noteTime += `${time.hours} hours, `;
        if (time.minutes !== 0) noteTime += `${time.minutes} minutes, `;
        noteTime += `${time.seconds} seconds ago`;

        return noteTime;
    }

    View.prototype.__msToTime = function(s) {
        var ss = s;
        
        var ms = ss % 1000;
        ss = (ss - ms) / 1000;
        var secs = ss % 60;
        ss = (ss - secs) / 60;
        var mins = ss % 60;
        var hrs = (ss - mins) / 60;

        return {
            hours: hrs,
            minutes: mins,
            seconds: secs
        }
    }

    // export
    window.app = window.app || {};
    window.app.View = View;
}())