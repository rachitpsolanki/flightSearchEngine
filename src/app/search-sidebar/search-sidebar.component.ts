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

  private searchForm = this.searchSVC.searchForm;
  
  ngOnInit() {
  }
  search(){
    this.searchSVC.getFlights();
  }


}
