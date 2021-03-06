import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllSightings, OverviewState, LoadSightings } from '../../store';
import { Observable } from 'rxjs';
import { Sighting } from 'src/overview/model/sighting.model';

@Component({
	selector: 'app-overview',
	templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {
	sightings$: Observable<Sighting[]>;
	query = '?dateFrom=2016-10-01&dateTo=2018-10-02';

	constructor(private store: Store<OverviewState>) { }

	ngOnInit() {
		this.sightings$ = this.store.select(getAllSightings);
		this.store.dispatch(new LoadSightings(this.query));
	}

}
