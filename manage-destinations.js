document.addEventListener('DOMContentLoaded', () => {
    renderDestinationsTable();

    document.getElementById('addDestinationBtn').addEventListener('click', redirectToAddDestination);
});

// Render the destinations table
function renderDestinationsTable() {
    const destinationsTableBody = document.getElementById('destinationsTableBody');
    destinationsTableBody.innerHTML = ''; 
    destinations.forEach(destination => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${destination.code}</td>
            <td>${destination.name}</td>
            <td>${destination.airportName}</td>
            <td><a href="${destination.airportUrl}" target="_blank">אתר אינטרנט</a></td>
            <td>${destination.email || 'לא זמין'}</td>
            <td><img src="${destination.imageUrl}" alt="${destination.name}" style="width: 50px; height: 50px;"></td>
        `;
        destinationsTableBody.appendChild(row);
    });
}

function redirectToAddDestination() {
    window.location.href = 'add-destination.html';
}
