
    document.addEventListener('DOMContentLoaded', function () {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const propertiesCards = document.querySelectorAll('.propertiescard');

        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                const filterValue = this.getAttribute('data-filter');

                propertiesCards.forEach(card => {
                    const category = card.getAttribute('data-category');

                    if (filterValue === 'all' || category === filterValue) {
                        card.style.display = 'flex'; // Show the card
                    } else {
                        card.style.display = 'none'; // Hide the card
                    }
                });
            });
        });
    });
