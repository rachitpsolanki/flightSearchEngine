
export class Routes {
	airline:string;	//2-letter (IATA) or 3-letter (ICAO) code of the airline.
	airline_id:number; // Unique OpenFlights identifier for airline (see Airline).
	source_airport:string;	//3-letter (IATA) or 4-letter (ICAO) code of the source airport.
	source_airport_id:number;//	Unique OpenFlights identifier for source airport (see Airport)
	Destination_airport:string;	//3-letter (IATA) or 4-letter (ICAO) code of the destination airport.
	Destination_airport_id:number; // Unique OpenFlights identifier for destination airport (see Airport)
	stops:number;
}

export class Flight {
	flight_number:string;
	capacity:number;
	rating:number;
}

