import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { Routes,SearchForm} from './classLIB';
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

	public searchResult:{single:Routes[],return:Routes[],src:string,dest:string} ={single:null,return:null,src:'',dest:''};
	private searchvalue;
	minFlightFare:number;
	maxFlightFare:number;

	constructor() { 
	}

	getFlights(){
		this.searchResult={single:null,return:null,src:'',dest:''};
		this.searchResult.src = this.searchForm.source.airport;
		this.searchResult.dest = this.searchForm.destination.airport;

		this.searchResult.single = this.checkIfValid(this.flightFilter(this.searchForm.source.airport_id,this.searchForm.destination.airport_id));

		if(this.searchForm.return_date){
			this.searchResult.return = this.checkIfValid(this.flightFilter(this.searchForm.destination.airport_id,this.searchForm.source.airport_id));
		}

		if(this.isValid(this.searchResult.single) || this.isValid(this.searchResult.return)){
			this.calculateMinMaxFares();
		}

		this.searchvalue=JSON.stringify(this.searchResult);	
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
		
		if(this.isValid(this.searchResult.single)){
			minMaxFares.push(Math.min.apply(Math,this.searchResult.single.map(function(o){return o.price;})));
			minMaxFares.push(Math.max.apply(Math,this.searchResult.single.map(function(o){return o.price;})));
		}
		
		if(this.isValid(this.searchResult.return)){
			minMaxFares.push(Math.min.apply(Math,this.searchResult.return.map(function(o){return o.price;})));
			minMaxFares.push(Math.max.apply(Math,this.searchResult.return.map(function(o){return o.price;})));
		}

		if(this.isValid(minMaxFares)){
			this.minFlightFare = Math.min.apply(Math,minMaxFares);
			this.maxFlightFare = Math.max.apply(Math,minMaxFares);
		}

	}

	fareFilter(fare){

		let filterResult = JSON.parse(this.searchvalue);
		if(filterResult.single){
			filterResult.single = filterResult.single.filter(res=>{return res.price<=fare});
			this.searchResult.single = filterResult.single;
		}
		if(filterResult.return){
			filterResult.return= filterResult.return.filter(res=>{return res.price<=fare});
			this.searchResult.return = filterResult.return;
		}
	}

	isValid(value){
		if(value){
			if(value.length>0)
				return true;
			
		}
		return false;

	}

	checkIfValid(array){
		if(array){
			if(array.length>0){
				return array;
			}
			else{
				return [];
			}	
		}
		return null;
	}

}
