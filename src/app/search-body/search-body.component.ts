import { Component, OnInit,Input } from '@angular/core';
import { SearchService } from '../search.service';
import { Routes } from '../flight';
@Component({
  selector: 'app-search-body',
  templateUrl: './search-body.component.html',
  styleUrls: ['./search-body.component.css']
})
export class SearchBodyComponent implements OnInit {
  
  private searchResult=this.searchSVC.searchResult;

  constructor(private searchSVC:SearchService) {}

  ngOnInit() {}

}
