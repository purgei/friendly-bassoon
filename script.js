document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inventory-form');
    const tableBody = document.querySelector('#inventory-table tbody');
    const searchInput = document.getElementById('search');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const itemName = document.getElementById('item-name').value;
        const itemLocation = document.getElementById('item-location').value;
        const itemDescription = document.getElementById('item-description').value;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${itemName}</td>
            <td>${itemLocation}</td>
            <td>${itemDescription}</td>
        `;

        tableBody.appendChild(row);

        form.reset();
    });

    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        const rows = tableBody.getElementsByTagName('tr');

        Array.from(rows).forEach(row => {
            const itemName = row.cells[0].textContent.toLowerCase();
            if (itemName.includes(filter)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});
