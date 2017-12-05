import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';



@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
	
	
	constructor(private searchSVC:SearchService) {
	}

	private airports=this.searchSVC.airports;


	@Output() searchEvent : EventEmitter<boolean> = new EventEmitter<boolean>();
	searchForm= this.searchSVC.searchForm;
	
	ngOnInit() {}

	search(){
		this.searchEvent.emit(true);
		this.animateBanner();
		this.searchSVC.getFlights();
	}

	animateBanner(){		
		var height = document.getElementById('app-header-body').offsetHeight;
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
