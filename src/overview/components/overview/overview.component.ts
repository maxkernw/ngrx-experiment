import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
	selector: 'app-overview',
	templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {

	constructor(private store: Store<fromStore.OverviewState>) { }

	ngOnInit() {
		this.store.select('overview').subscribe(state => {
			console.log(state);
		});
	}

}
