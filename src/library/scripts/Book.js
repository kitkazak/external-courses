function Book(bookObj) {
    var name = bookObj.title,
    author = `${bookObj.author.firstName} ${bookObj.author.lastName}`;

    var currentRating = bookObj.rating;

    this.getDOMElement = function() {
        return DOMElement;
    }

    var DOMElement = createBook(bookObj);

    function createBook(bookObj) {
        var bookContainer = document.createElement('div');
        bookContainer.classList.add('book');
        bookContainer.setAttribute('data-book-id', bookObj.id);
    
        // Create header
        var bookCover = document.createElement('div');
        bookCover.classList.add('book__cover');
            
        var img = new Image();
        img.src = bookObj.image_url;
        img.alt = bookObj.title;
        
        bookCover.appendChild(img);
        bookContainer.appendChild(bookCover);
    
        // Create header
        var header = document.createElement('h4');
        header.classList.add('book__title');
        header.innerHTML = bookObj.title;
        bookContainer.appendChild(header);
    
        // Create author span element
        var author = document.createElement('span');
        author.classList.add('book__author');
        author.innerHTML = `by ${bookObj.author.firstName} ${bookObj.author.lastName}`;
        bookContainer.appendChild(author);
    
        // Create rating
        var rating = document.createElement('div');
        rating.classList.add('book__rating');
    
        rating.appendChild(setRating(bookObj.rating));

        rating.addEventListener('click', ratingOnClick);
        // rating.addEventListener('mouseover', ratingOnMouseOver);
        // rating.addEventListener('mouseout', ratingOnMouseOut);
        // rating.addEventListener('mouseleave', ratingOnMouseLeave);

        bookContainer.appendChild(rating);

        return bookContainer;
    }

    function ratingOnClick(e) {
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
                setRating(0),
                this.querySelector('ul')
            )
        } else {
            currentRating = targetStarIndex;
            this.replaceChild(
                setRating(targetStarIndex),
                this.querySelector('ul')
            )           
        }

        var ratingChangeEvent = new CustomEvent('ratingChange', {
            bubbles: true,

            detail: {
                changedBookAuthor: author,
                changedBookName: name 
            }
        });

        this.dispatchEvent(ratingChangeEvent);
    }

    // function ratingOnMouseOver(e) {
    //     if (e.target === this || e.target.tagName === 'UL') return;
    //     var target = e.target;

    //     while (target.tagName !== 'LI') {
    //         target = target.parentNode;
    //     }

    //     var stars = this.querySelectorAll('li'),
    //         targetStarIndex;

    //     for (let i = 0; i < stars.length; i++) {
    //         if (target === stars[i]) {
    //             targetStarIndex = i + 1;
    //         }
    //     }

    //     this.replaceChild(
    //         setRating(targetStarIndex),
    //         this.querySelector('ul')
    //     )
    // }

    // function ratingOnMouseOut(e) {
    //     if (e.relatedTarget.tagName !== '') {

    //     }

    //     this.replaceChild(
    //         setRating(currentRating),
    //         this.querySelector('ul')
    //     );
    //     console.log('out')
    // }

    // function ratingOnMouseLeave() {
    //     this.replaceChild(
    //         setRating(currentRating),
    //         this.querySelector('ul')
    //     );
    //     console.log('leave')
    // }

    function setRating(bookObjRating) {
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
}

Book.prototype = Object.create(Object.prototype);
Book.prototype.constructor = Book;