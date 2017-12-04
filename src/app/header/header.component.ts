import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

	constructor(private searchSVC:SearchService) {
	}

	searchForm= this.searchSVC.searchForm;
	
	ngOnInit() {}

	search(){
		this.searchSVC.getFlights();
	}
}
