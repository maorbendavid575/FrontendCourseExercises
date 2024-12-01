document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('saveDestinationBtn').addEventListener('click', saveDestination);
});

function saveDestination() {
    const code = document.getElementById('destinationCode').value.trim().toUpperCase();
    const name = document.getElementById('destinationName').value.trim();
    const airportName = document.getElementById('airportName').value.trim();
    const airportUrl = document.getElementById('airportUrl').value.trim();
    const email = document.getElementById('email').value.trim();
    const imageUrl = document.getElementById('imageUrl').value.trim();

    // Validations
    if (!code || !name || !airportName || !airportUrl || !email || !imageUrl) {
        alert('אנא מלא את כל השדות.');
        return;
    }

    if (code.length !== 3 || !/^[A-Z]+$/.test(code)) {
        alert('קוד יעד חייב להיות בדיוק 3 אותיות גדולות באנגלית.');
        return;
    }

    if (destinations.some(destination => destination.code === code)) {
        alert('קוד יעד זה כבר קיים במערכת.');
        return;
    }

    if (destinations.some(destination => destination.name === name)) {
        alert('שם יעד זה כבר קיים במערכת.');
        return;
    }

    if (destinations.some(destination => destination.airportName === airportName)) {
        alert('שם שדה התעופה הזה כבר קיים במערכת.');
        return;
    }

    if (!/^[\u0590-\u05FFa-zA-Z\s\-]+$/.test(airportName)) {
        alert('שם שדה התעופה חייב להכיל רק אותיות עברית, אנגלית, רווחים ומקפים.');
        return;
    }

    if (!isValidUrl(airportUrl)) {
        alert('כתובת אתר שדה התעופה אינה תקינה.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('כתובת האימייל אינה תקינה.');
        return;
    }

    if (!isValidUrl(imageUrl)) {
        alert('כתובת התמונה אינה תקינה.');
        return;
    }

    const newDestination = {
        code,
        name,
        airportName,
        airportUrl,
        email,
        imageUrl
    };

    // Display success message and the new destination object
    alert(`היעד נשמר בהצלחה:\n${JSON.stringify(newDestination, null, 2)}`);

    document.getElementById('destinationCode').value = '';
    document.getElementById('destinationName').value = '';
    document.getElementById('airportName').value = '';
    document.getElementById('airportUrl').value = '';
    document.getElementById('email').value = '';
    document.getElementById('imageUrl').value = '';

    window.location.href = 'manage-destinations.html';
}

function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch {
        return false;
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
