import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';



@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
	
	quoteArray=[
	'Plannig your Next Trip?',
	'Flying to your dream Destination?',
	'Looking for Great Discounts on Flights?'
	];
	quote:string=this.quoteArray[0];
	constructor(private searchSVC:SearchService) {
		this.animateQuote()
	}

	private airports=this.searchSVC.airports;

	animateQuote(){	
	let t = this;	
		let step=0;
		var timerID = setInterval(function() {
			t.quote = t.quoteArray[step];
			step++
			if(step==2)
				step=0;
		}, 5000);
	}

	@Output() searchEvent : EventEmitter<boolean> = new EventEmitter<boolean>();
	searchForm= this.searchSVC.searchForm;
	
	ngOnInit() {}

	search(){
		if(this.searchSVC.searchForm.source && this.searchSVC.searchForm.destination && this.searchSVC.searchForm.departure_date){
			this.searchEvent.emit(true);
			this.animateBanner();
			this.searchSVC.getFlights();
		}
	}

	animateBanner(){		
		var height = document.getElementById('app-header-body').offsetHeight-56;
		var scrollBy=0;
		var timerID = setInterval(function() {
			window.scrollTo(0, scrollBy);
			scrollBy+=height/20
			if(scrollBy>=height){
				clearInterval(timerID);
				document.getElementById('app-header-body').style.display='none';
			}
		}, 10);
	}

	reset(){
			document.getElementById('app-header-body').style.display='block';
			// window.scrollTo(0, document.getElementById('app-header-body').offsetHeight);

	}
}
