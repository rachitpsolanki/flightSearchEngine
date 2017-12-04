import { Component, OnInit,Input } from '@angular/core';
import {Routes} from '../flight'

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})

export class SearchItemComponent implements OnInit {
	@Input() flight:Routes;
  
  constructor() {
   }

  ngOnInit() {
  }

}
