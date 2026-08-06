document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.primary-btn-search');
    const filterPills = document.querySelectorAll('.filter-pill');
    const employeeCards = document.querySelectorAll('.employee-card');

    let searchQuery = '';
    let currentFilter = 'All roles';

    
    function runFilters() {
        employeeCards.forEach(card => {
            const name = card.querySelector('.emp-name').textContent.toLowerCase();
            const position = card.querySelector('.emp-position').textContent;
            const matchesSearch = name.includes(searchQuery) || position.toLowerCase().includes(searchQuery);
            const matchesFilter = currentFilter === 'All roles' || position.includes(currentFilter);
            if (matchesSearch && matchesFilter) {
                card.style.display = ''; 
            } else {
                card.style.display = 'none'; 
            }
        });
    }

  
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        runFilters();
    });

    
    searchBtn.addEventListener('click', () => {
        searchQuery = searchInput.value.toLowerCase().trim();
        runFilters();
    });

    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterPills.forEach(p => p.classList.remove('active-pill'))
            pill.classList.add('active-pill');
            currentFilter = pill.textContent.trim();
            runFilters();
        });
    });

    if(filterPills.length > 0) {
        filterPills[0].classList.add('active-pill');
    }
});