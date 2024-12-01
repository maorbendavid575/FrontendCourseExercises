document.addEventListener('DOMContentLoaded', () => {
    populateSelectOptions();

    document.getElementById('saveFlightBtn').addEventListener('click', saveFlight);
});

function populateSelectOptions() {
    const originSelect = document.getElementById('origin');
    const destinationSelect = document.getElementById('destination');

    destinations.forEach(destination => {
        const option = document.createElement('option');
        option.value = destination.code;
        option.textContent = destination.name;
        originSelect.appendChild(option);

        const optionClone = option.cloneNode(true);
        destinationSelect.appendChild(optionClone);
    });t
}

// Validate and save the flight
function saveFlight() {
    const flightNo = document.getElementById('flightNo').value.trim();
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const boardingDate = document.getElementById('boardingDate').value;
    const boardingTime = document.getElementById('boardingTime').value;
    const arrivalDate = document.getElementById('arrivalDate').value;
    const arrivalTime = document.getElementById('arrivalTime').value;
    const seats = parseInt(document.getElementById('seats').value, 10);

    if (!flightNo || !origin || !destination || !boardingDate || !boardingTime || !arrivalDate || !arrivalTime || isNaN(seats) || seats <= 0) {
        alert('אנא מלא את כל השדות בצורה תקינה.');
        return;
    }
    if (origin === destination) {
        alert('מוצא ויעד לא יכולים להיות זהים.');
        return;
    }
    if (new Date(boardingDate) >= new Date(arrivalDate)) {
        alert('תאריך המראה חייב להיות לפני תאריך נחיתה.');
        return;
    }
    if (new Date(boardingDate) < new Date()) {
        alert('תאריך המראה חייב להיות בעתיד.');
        return;
    }
    if (flights.some(flight => flight.flightNumber === flightNo)) {
        alert('מספר טיסה זה כבר קיים במערכת.');
        return;
    }

    const newFlight = new Flight(flightNo, origin, destination, boardingDate, boardingTime, arrivalDate, arrivalTime, seats);

    // Display a success message with the new flight details
    alert(`הטיסה נשמרה בהצלחה:\n${JSON.stringify(newFlight, null, 2)}`);

    window.location.href = 'manage-flights.html';
}
