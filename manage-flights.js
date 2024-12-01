document.addEventListener("DOMContentLoaded", () => {
    const flightsTableBody = document.getElementById("flightsTableBody");

    flights.forEach(flight => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${flight.flightNumber}</td>
            <td>${flight.origin}</td>
            <td>${flight.destination}</td>
            <td>${flight.boardingDate}</td>
            <td>${flight.boardingTime}</td>
            <td>${flight.arrivalDate}</td>
            <td>${flight.arrivalTime}</td>
            <td>${flight.seats}</td>
        `;
        flightsTableBody.appendChild(row);
    });
});

function redirectToAddFlight() {
    window.location.href = "add-flight.html";
}
