import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-search-sidebar',
  templateUrl: './search-sidebar.component.html',
  styleUrls: ['./search-sidebar.component.css']
})
export class SearchSidebarComponent implements OnInit {
  airports;
  searchForm;
  min;
  max;

  constructor(private searchSVC:SearchService) {}  

  ngOnInit() {
    this.airports=this.searchSVC.airports;
    this.searchForm = this.searchSVC.searchForm;
    this.min = this.searchSVC.minFlightFare;
    this.max = this.searchSVC.maxFlightFare;
  }

  valueChanged(e){
    this.searchSVC.fareFilter(e);
    this.ngOnInit();
    
  }

  search(){
    this.searchSVC.getFlights();
    this.ngOnInit();
  }

  captureEvent(e){
    console.log(e)
  }

}
