import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-search-sidebar',
  templateUrl: './search-sidebar.component.html',
  styleUrls: ['./search-sidebar.component.css']
})
export class SearchSidebarComponent implements OnInit {

  constructor(private searchSVC:SearchService) {
  }

  private airports=this.searchSVC.airports;
  private searchForm = this.searchSVC.searchForm;
  private min = this.searchSVC.minFlightFare;
  private max = this.searchSVC.maxFlightFare;
  
  ngOnInit() {
  }
  search(){
    this.searchSVC.getFlights();
  }
  captureEvent(e){
    console.log(e)
  }


}
