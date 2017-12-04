import { Injectable } from '@angular/core';
import { Routes} from './flight';
import { flights } from './mock-flight-data';

@Injectable()
export class SearchService {

	searchForm:any={
		origin:'',
		destination:'',
		departure_date:'',
		return_date:'',
		no_of_passengers:1
	}
	searchResult:Routes[]=[];

	constructor() { }

	getFlights(): Routes[] {
		console.log('### Get flights called')
		this.searchResult = flights;
		return flights;
	}

}
