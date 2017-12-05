import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	showSearchDashboard:boolean=false;
 	 constructor(private searchSVC:SearchService) {}

	onSearch(e){
		this.showSearchDashboard=true;
	}
	
	ngOnInit() {
	}

}
