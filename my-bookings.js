document.addEventListener("DOMContentLoaded", () => {
    const bookingsContainer = document.getElementById("bookingsContainer");

    bookings.forEach((booking) => {
        const flight = flights.find((f) => f.flightNumber === booking.flightNumber);

        if (!flight) return;

        const bookingCard = document.createElement("div");
        bookingCard.classList.add("booking-card");

        const destinationImage = document.createElement("img");
        const destination = destinations.find((d) => d.name === flight.destination);
        destinationImage.src = destination ? destination.imageUrl : "placeholder.jpg";
        destinationImage.alt = `תמונה של ${flight.destination}`;
        destinationImage.classList.add("destination-image");

        const bookingDetails = document.createElement("div");
        bookingDetails.classList.add("booking-details");
        bookingDetails.innerHTML = `
            <p>מוצא: ${flight.origin} | תאריך ושעת המראה: ${flight.boardingDate} ${flight.boardingTime}</p>
            <p>יעד: ${flight.destination} | תאריך ושעת נחיתה: ${flight.arrivalDate} ${flight.arrivalTime}</p>
            <p>מספר נוסעים: ${booking.passengerCount}</p>
        `;

        bookingCard.appendChild(destinationImage);
        bookingCard.appendChild(bookingDetails);

        bookingsContainer.appendChild(bookingCard);
    });
});
