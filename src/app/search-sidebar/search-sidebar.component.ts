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
  fare;
  constructor(private searchSVC:SearchService) {}  

  ngOnInit() {
    this.airports=this.searchSVC.airports;
    this.searchForm = this.searchSVC.searchForm;
    this.min = this.searchSVC.minFlightFare;
    this.max = this.searchSVC.maxFlightFare;
  }

  valueChanged(e){
    this.fare=e;
    this.searchSVC.fareFilter(e);
    this.ngOnInit();
    
  }

  search(){
    if(this.searchSVC.searchForm.source && this.searchSVC.searchForm.destination && this.searchSVC.searchForm.departure_date){
      this.searchSVC.getFlights();
      this.ngOnInit();
      if(this.fare){
        this.searchSVC.fareFilter(this.fare);
      }
    }
  }

  captureEvent(e){
    console.log(e)
  }

}
