var elem = document.querySelector('.grid');
var filterValue = "";
var filterButtons = document.querySelectorAll(".game-filter button");

filterButtons.forEach(button => {
    button.addEventListener("click", function() {
        filterValue = this.getAttribute('data-filter');
        iso.arrange({ filter: filterValue });
    })
});

var iso = new Isotope( elem, {
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    filter: filterValue
});