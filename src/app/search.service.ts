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

	public searchResult:{single:Routes[],return:Routes[]} ={single:[],return:[]};
	private searchvalue;
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
		this.calculateMinMaxFares();
		this.searchvalue=JSON.stringify(this.searchResult);	
		return this.searchResult;
	}
	
	flightFilter(source_id,destination_id){

		let flightstofilter = flights;
		let flightArray = flightstofilter.filter(flight=>{
			return ( source_id == flight.source_airport_id) && (destination_id == flight.destination_airport_id);
		});
		return flightArray;
	}

	calculateMinMaxFares(){

		let minMaxFares=[]; 
		minMaxFares.push(Math.min.apply(Math,this.searchResult.single.map(function(o){return o.price;})));
		minMaxFares.push(Math.max.apply(Math,this.searchResult.single.map(function(o){return o.price;})));

		if(this.searchForm.return_date){
			minMaxFares.push(Math.min.apply(Math,this.searchResult.return.map(function(o){return o.price;})));
			minMaxFares.push(Math.max.apply(Math,this.searchResult.return.map(function(o){return o.price;})));
		}

		this.minFlightFare = Math.min.apply(Math,minMaxFares);
		this.maxFlightFare = Math.max.apply(Math,minMaxFares);
	}
	
	fareFilter(fare){

		let filterResult =JSON.parse(this.searchvalue);
		filterResult.single = filterResult.single.filter(res=>{return res.price<=fare});
		filterResult.return= filterResult.return.filter(res=>{return res.price<=fare});
		this.searchResult = filterResult;
	}

}
