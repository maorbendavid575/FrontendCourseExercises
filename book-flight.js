document.addEventListener('DOMContentLoaded', () => {
    const filterBySelect = document.getElementById('filterBy');
    const originSelect = document.getElementById('origin');
    const destinationSelect = document.getElementById('destination');
    const flightSearchForm = document.getElementById('flightSearchForm');

    populateSelectOptions(originSelect, 'origin');
    populateSelectOptions(destinationSelect, 'destination');

    displayFlights(flights);

    filterBySelect.addEventListener('change', () => {
        const filterBy = filterBySelect.value;
        if (!filterBy) {
            displayFlights(flights);
            return;
        }
        filteredFlights = sortFlightsByFilter([...flights], filterBy);
        displayFlights(filteredFlights);
    });

    flightSearchForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const origin = originSelect.value;
        const destination = destinationSelect.value;

        filteredFlights = flights.filter(flight =>
            (!origin || flight.origin === origin) &&
            (!destination || flight.destination === destination)
        );

        displayFlights(filteredFlights);

        originSelect.value = '';
        destinationSelect.value = '';
    });
});

function populateSelectOptions(selectElement, key) {
    const uniqueValues = [...new Set(flights.map(flight => flight[key]))];
    uniqueValues.forEach(value => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
    });
}

// Sort flights based on selected filter criteria
function sortFlightsByFilter(flightsList, filterBy) {
    if (filterBy === 'airline') {
        return flightsList.sort((a, b) => a.airline.localeCompare(b.airline));
    } else if (filterBy === 'time') {
        return flightsList.sort((a, b) => {
            const dateTimeA = new Date(`${convertToISODate(a.boardingDate)}T${a.boardingTime}`);
            const dateTimeB = new Date(`${convertToISODate(b.boardingDate)}T${b.boardingTime}`);
            return dateTimeA - dateTimeB;
        });
    }
    return flightsList;
}

function convertToISODate(dateString) {
    const [day, month, year] = dateString.split("-");
    return `${year}-${month}-${day}`;
}

// Display flights in the results table
function displayFlights(flightsList) {
    const resultsTableBody = document.querySelector('#resultsTable tbody');
    resultsTableBody.innerHTML = '';

    if (flightsList.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="6">לא נמצאו טיסות תואמות.</td>`;
        resultsTableBody.appendChild(row);
        return;
    }

    flightsList.forEach(flight => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${flight.origin}</td>
            <td>${flight.destination}</td>
            <td>${flight.airline}</td>
            <td>${flight.boardingDate} ${flight.boardingTime}</td>
            <td>${flight.arrivalDate} ${flight.arrivalTime}</td>
            <td><button class="bookFlightBtn" onclick="bookFlight('${flight.flightNumber}')">הזמן</button></td>
        `;
        resultsTableBody.appendChild(row);
    });
}

function bookFlight(flightNumber) {
    console.log(`Booking flight: ${flightNumber}`);
    window.location.href = `book-flight-form.html?flightNumber=${flightNumber}`;
}
