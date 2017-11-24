import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-sidebar',
  templateUrl: './search-sidebar.component.html',
  styleUrls: ['./search-sidebar.component.css']
})
export class SearchSidebarComponent implements OnInit {

  private searchForm:object={
  	origin:'',
  	destination:'',
  	departure_date:'',
  	return_date:'',
  	no_of_passengers:0
  }

  constructor() { }

  ngOnInit() {
  }

  search(){
  	console.log(this.searchForm);
  }


}
