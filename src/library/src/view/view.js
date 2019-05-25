(function(){
    function View(controller) {
        this.controller = controller;

        var self = this;

        // DOM Elements
        this.$booksContainer = document.querySelector('.books__container');
        this.$filtersContainer = document.querySelector('.main__head-nav');
        
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
            self.controller.filterBooks(filterName);
            self.renderBooks(self.controller.getCurrentlyShownBooksArr());
        }
        this.$filtersContainer.addEventListener('click', this.__handleFiltersContainerClick);
    }
    
    View.prototype.renderBooks = function() {
        var books = this.controller.getCurrentlyShownBooksArr();
        
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

    // export
    window.app = window.app || {};
    window.app.View = View;
}())