import { Component, OnInit ,Input,Output} from '@angular/core';


@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  	constructor() {}
	@Input() min;
	@Input() max;
	
	value=10;

	ngOnInit() {
	}

	chnageFilter(){
		// console.log(this.value);
	}

}
