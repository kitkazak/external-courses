const MainHeadMenu = function(DOMElement) {
    var elem = DOMElement,
        filtersContainer = elem.querySelector('ul');

    filtersContainer.addEventListener('click', onFiltersContainerClick);    

    function onFiltersContainerClick(e) {
        var target = e.target;
        const classSelected = 'main__head-nav_selected';

        if (target.tagName === 'UL' || target.classList.contains(classSelected)) return;
        while (target.tagName !== 'LI') target = target.parentElement;

        var allFilters = target.parentElement.querySelectorAll('li');
        for (let i = 0; i < allFilters.length; i++) {
            if (allFilters[i].classList.contains(classSelected)) {
                allFilters[i].classList.remove(classSelected);
            }
        }
        target.classList.add(classSelected);

        var filterName = target.getAttribute('data-filter');
        filterBooks(filterName)
    }
}

var mainHeadMenu = new MainHeadMenu(document.querySelector('.main__head-menu'));