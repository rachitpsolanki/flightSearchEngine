import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { Routes,SearchForm} from './flight';
import { flights,airports } from './mock-flight-data';


@Injectable()
export class SearchService {
	airports=airports;
	
	searchForm:SearchForm ={
		source:{
			airport: '',
			airport_id: null,
			airport_code: ''
		},
		destination:{
			airport: '',
			airport_id: null,
			airport_code: ''
		},
		departure_date:'',
		return_date:'',
		no_of_passengers:1
	};

	searchResult:{single:Routes[],return:Routes[]} ={single:[],return:[]};
	
	minFlightFare:number;
	maxFlightFare:number;
	
	constructor() { 
	}

	getFlights(){

		console.log('### Get flights called',this.searchForm);
		
		this.searchResult.single = this.flightFilter(this.searchForm.source.airport_id,this.searchForm.destination.airport_id);
		
		if(this.searchForm.return_date){
			this.searchResult.return = this.flightFilter(this.searchForm.destination.airport_id,this.searchForm.source.airport_id);
		}
		console.log(this.searchResult);		
		this.calculateMinMaxFares();
		console.log(this.maxFlightFare,this.minFlightFare);
		return this.searchResult;
	}
	
	calculateMinMaxFares(){

		let maxSingle = 0 ,minSingle = 0,maxReturn= 0,minReturn = 0; 
		console.log( maxSingle,minSingle,maxReturn,minReturn);
		minSingle= Math.min.apply(Math,this.searchResult.single.map(function(o){return o.price;}));
		maxSingle = Math.max.apply(Math,this.searchResult.single.map(function(o){return o.price;}));

		if(this.searchForm.return_date){
			minReturn = Math.min.apply(Math,this.searchResult.return.map(function(o){return o.price;}));
			maxReturn = Math.max.apply(Math,this.searchResult.return.map(function(o){return o.price;}));
		}
		this.minFlightFare = minSingle + minReturn;
		this.maxFlightFare = maxSingle + maxReturn;
		console.log( maxSingle,minSingle,maxReturn,minReturn);
		

	}

	flightFilter(source_id,destination_id){
		let flightstofilter = flights;
		let flightArray = flightstofilter.filter(flight=>{
			return ( source_id == flight.source_airport_id) && (destination_id == flight.destination_airport_id);
		});
		return flightArray;
	}

}
