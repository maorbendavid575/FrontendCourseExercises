class Destination {
    constructor(code, name, airportName, airportUrl,email, imageUrl) {
        this.code = code;
        this.name = name; 
        this.airportName = airportName; 
        this.airportUrl = airportUrl; 
        this.email = email; 
        this.imageUrl = imageUrl; 
    }
}

class Flight {
    constructor(flightNumber, origin, destination, airline, boardingDate, boardingTime, arrivalDate, arrivalTime, seats) {
        this.flightNumber = flightNumber;
        this.origin = origin; 
        this.destination = destination; 
        this.airline = airline; 
        this.boardingDate = boardingDate; 
        this.boardingTime = boardingTime; 
        this.arrivalDate = arrivalDate; 
        this.arrivalTime = arrivalTime; 
        this.seats = seats; 
    }
}

class Booking {
    constructor(flightNumber, passengerCount) {
        this.flightNumber = flightNumber; 
        this.passengerCount = passengerCount; 
    }
}

const destinations = [
    new Destination("TLV", "תל אביב", "נמל תעופה בן גוריון", "https://www.iaa.gov.il/en/", "info@bengurionairport.co.il", "https://www.zmantelaviv.com/wp-content/uploads/2023/09/2.jpg"),
    new Destination("JFK", "ניו יורק", "נמל תעופה ג'ון פ. קנדי", "https://www.jfkairport.com/", "info@jfkairport.com", "https://www.lametayel.co.il/limages/744f38dce7d6704411124277fb7beba1.jpg?size=830x0&type=r"),
    new Destination("LHR", "לונדון", "נמל תעופה הית'רו", "https://www.heathrow.com/", "info@heathrowairport.com", "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRj8g2WGx2WKl5DjBWBUSrjKrxZ9s4_PGHPlZJi7Cth748HVkEG6BvXcPFQ7uyLUJfGmlKic1YO_LCZ7jepcZH2C5bUFSt2cpHY0uEIjA"),
    new Destination("CDG", "פריז", "נמל תעופה שארל דה גול", "https://www.parisaeroport.fr/", "info@cdgairport.fr", "https://lh6.googleusercontent.com/proxy/VSDBMeOlHFia1rVgjtrzdD42kC-HsycxOoAOJ_VCsdrf1eGyS8-438Q3d5ZNb2nr8rNFxLRn6010qqIibO88yCK8tSWGlI9c4nZ4SpC3OuHk_771MhIgkGMUPNdhXZ3ytMcfVc54246Fipdt8_4UvcyhIAcAkKg=w810-h468-n-k-no"),
    new Destination("HND", "טוקיו", "נמל תעופה האנדה", "https://www.haneda-airport.jp/", "info@hanedaairport.jp", "https://blog.easygo.co.il/wp-content/uploads/2019/09/tokyo2.jpg"),
    new Destination("DXB", "דובאי", "נמל תעופה דובאי", "https://www.dubaiairports.ae/", "info@dubaiairports.ae", "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcREvzESZf1pOa84vaGwAcpRokq6ufBwgOkqUqd4VeZcw0sDnRlHb9o3iRjTSaWsAp5abO_h-OCTH7onzi0gcthDWYNQcYCwZY0gQM3OIZc"),
    new Destination("FRA", "פרנקפורט", "נמל תעופה פרנקפורט", "https://www.frankfurt-airport.com/", "info@frankfurtairport.com", "https://www.elal.com/magazine/wp-content/uploads/2017/01/shutterstock_145475239.jpg"),
    new Destination("BKK", "בנגקוק", "נמל תעופה סוברנבומי", "https://www.suvarnabhumiairport.com/", "info@suvarnabhumiairport.com", "https://www.elal.com/magazine/wp-content/uploads/2017/01/ThinkstockPhotos-480903890.jpg"),
    new Destination("SYD", "סידני", "נמל תעופה סידני", "https://www.sydneyairport.com.au/", "info@sydneyairport.com.au", "https://www.elal.com/magazine/wp-content/uploads/2017/01/ThinkstockPhotos-72969807-1.jpg"),
    new Destination("GRU", "סאו פאולו", "נמל תעופה גוארולוס", "https://www.gru.com.br/", "info@gruairport.com.br", "https://images.gringo.co.il/locations/44/1000x620_zkffncitrxr2aj0vy1wf.jpg"),
];

const flights = [
    new Flight("LY001", "תל אביב", "ניו יורק", "אל על", "16-07-2025", "20:00", "17-07-2025", "01:00", 200),
    new Flight("BA456", "לונדון", "פריז", "בריטיש איירווייז", "01-08-2025", "08:00", "01-08-2025", "10:30", 180),
    new Flight("AF789", "פריז", "טוקיו", "אייר פראנס", "12-09-2025", "23:15", "13-09-2025", "15:50", 300),
    new Flight("EK123", "דובאי", "פרנקפורט", "אמירייטס", "05-06-2025", "02:30", "05-06-2025", "06:15", 150),
    new Flight("TG456", "בנגקוק", "סידני", "תאי איירווייז", "20-07-2025", "11:00", "20-07-2025", "21:30", 250),
    new Flight("QF789", "סידני", "סאו פאולו", "קוואנטס", "25-10-2025", "18:45", "26-10-2025", "07:10", 320),
    new Flight("DL123", "ניו יורק", "לונדון", "דלתא", "15-05-2025", "22:00", "16-05-2025", "10:00", 280),
    new Flight("LH456", "פרנקפורט", "בנגקוק", "לופטהנזה", "30-11-2025", "06:15", "30-11-2025", "18:45", 240),
    new Flight("NH789", "טוקיו", "דובאי", "אנה", "20-04-2025", "09:00", "20-04-2025", "16:30", 220),
    new Flight("UA123", "לונדון", "תל אביב", "יונייטד", "10-12-2025", "07:30", "10-12-2025", "12:00", 260),
];

const bookings = [
    { flightNumber: "LY001", passengerCount: 5 },
    { flightNumber: "BA456", passengerCount: 3 },
    { flightNumber: "AF789", passengerCount: 2 },
    { flightNumber: "EK123", passengerCount: 4 },
    { flightNumber: "TG456", passengerCount: 1 },
    { flightNumber: "QF789", passengerCount: 6 },
    { flightNumber: "DL123", passengerCount: 3 },
    { flightNumber: "LH456", passengerCount: 2 },
    { flightNumber: "NH789", passengerCount: 5 },
    { flightNumber: "UA123", passengerCount: 4 },
];
