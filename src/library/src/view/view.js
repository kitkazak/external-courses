function View(controller) {
    this.controller = controller;
    this.$booksContainer = document.querySelector('.books__container');   
}

View.prototype.renderBooks = renderBooks;

function renderBooks() {
    var books = this.controller.getBooks();

    for (let i = 0; i < books.length; i++) {
        var book = new Book(books[i]);
        console.log(book);
        this.$booksContainer.appendChild(book.getDOMElement());
    }
}

function renderRating(bookObjRating) {
    console.log()
    var rating = bookObjRating,
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

function Book(bookObj) {
    var title = bookObj.title,
    authorFirstName = bookObj.author.firstName,
    authorLastName = bookObj.author.lastName,
    imgUrl = bookObj.image_url,
    rating = bookObj.rating,
    currentRating = rating;

    this.getDOMElement = function() {
        return DOMElement;
    }

    var DOMElement = createBook();

    function createBook() {
        var book = document.createElement('div');
        book.classList.add('book');
        book.setAttribute('data-book-id', bookObj.id);

        book.innerHTML = 
        `
            <div class="book__cover">
                <img src="${imgUrl}" alt="${title}">
            </div>
            <h4 class="book__title">${title}</h4>
            <span class="book__author">by ${authorFirstName} ${authorLastName}</span> 
            <div class="book__rating"><div>
        `;

        var ratingContainer = book.querySelector('.book__rating');
        ratingContainer.appendChild(renderRating(rating));
        ratingContainer.addEventListener('click', handleRatingClick);
        
        return book;
    }

    function handleRatingClick(e) {
        if (e.target === this || e.target.tagName === 'UL') return;
        var target = e.target;

        while (target.tagName !== 'LI') {
            target = target.parentNode;
        }

        var stars = this.querySelectorAll('li');
        var targetStarIndex;

        for (let i = 0; i < stars.length; i++) {
            if (target === stars[i]) {
                targetStarIndex = i + 1;
            }
        }

        if (targetStarIndex === currentRating) {
            currentRating = 0;
            this.replaceChild(
                renderRating(0),
                this.querySelector('ul')
            )
        } else {
            currentRating = targetStarIndex;
            this.replaceChild(
                renderRating(targetStarIndex),
                this.querySelector('ul')
            )           
        }
    }
}