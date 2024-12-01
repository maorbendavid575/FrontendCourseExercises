document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const flightNumber = params.get('flightNumber');

    const flight = flights.find(f => f.flightNumber === flightNumber);

    if (!flight) {
        alert('שגיאה: טיסה לא נמצאה במערכת.');
        window.location.href = 'book-flight.html';
        return;
    }

    const flightDetails = document.getElementById('flightDetails');
    flightDetails.innerHTML = `
        <p>מוצא: ${flight.origin} | תאריך ושעת המראה: ${flight.boardingDate} ${flight.boardingTime}</p>
        <p>יעד: ${flight.destination} | תאריך ושעת נחיתה: ${flight.arrivalDate} ${flight.arrivalTime}</p>
        <p>מספר מושבים פנויים: ${flight.seats}</p>
    `;

    document.getElementById('numPassengers').addEventListener('input', () => {
        updatePassengerFields(flight.seats);
    });

    // Validate and save booking 
    document.getElementById('bookingForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const numPassengers = parseInt(document.getElementById('numPassengers').value, 10);
        if (!numPassengers || numPassengers <= 0) {
            alert('שגיאה: מספר הנוסעים חייב להיות גדול מ-0.');
            return;
        }

        if (numPassengers > flight.seats) {
            alert(`שגיאה: מספר הנוסעים חורג ממספר המושבים הפנויים (${flight.seats}).`);
            return;
        }

        const passengers = [];
        for (let i = 1; i <= numPassengers; i++) {
            const name = document.getElementById(`passengerName${i}`).value.trim();
            const passportId = document.getElementById(`passportId${i}`).value.trim();

            if (!/^[\u0590-\u05FF\s]+$/.test(name)) {
                alert(`שגיאה: שם הנוסע ${i} חייב להיות בעברית בלבד.`);
                return;
            }

            if (!/^\d+$/.test(passportId)) {
                alert(`שגיאה: מספר דרכון של נוסע ${i} חייב להכיל ספרות בלבד.`);
                return;
            }

            if (passengers.some(p => p.passportId === passportId)) {
                alert(`שגיאה: מספר דרכון ${passportId} כבר קיים ברשימת הנוסעים.`);
                return;
            }

            passengers.push({ name, passportId });
        }

        alert(`ההזמנה נשמרה בהצלחה:\n${JSON.stringify(passengers, null, 2)}`);
        resetForm();
        window.location.href = 'my-bookings.html';
    });
});

// Dynamically create fields for passenger details
function updatePassengerFields(maxSeats) {
    const numPassengers = parseInt(document.getElementById('numPassengers').value, 10);
    const passengerDetails = document.getElementById('passengerDetails');
    passengerDetails.innerHTML = ''; 
    if (!numPassengers || numPassengers <= 0 || numPassengers > maxSeats) {
        return;
    }

    for (let i = 1; i <= numPassengers; i++) {
        const passengerDiv = document.createElement('div');
        passengerDiv.classList.add('form-group');
        passengerDiv.innerHTML = `
            <label for="passengerName${i}">שם נוסע ${i}:</label>
            <input type="text" id="passengerName${i}" placeholder="הכנס שם נוסע" required>
            <label for="passportId${i}">מספר דרכון:</label>
            <input type="text" id="passportId${i}" placeholder="הכנס מספר דרכון" required>
        `;
        passengerDetails.appendChild(passengerDiv);
    }
}

function resetForm() {
    document.getElementById('bookingForm').reset();
    document.getElementById('passengerDetails').innerHTML = ''; 
}
