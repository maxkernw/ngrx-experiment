import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';

import * as sightingsActions from '../actions/sightings.actions';
import { Response, Meta } from '../../model/response.model';
import { Sighting } from 'src/overview/model/sighting.model';
import { of } from 'rxjs';
import { HttpService } from '../../../core/http/http.service';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class SightingsEffect {

	readonly header = { 'Ocp-Apim-Subscription-Key': 'a1ea858711ac4f96a6f703c7b237e35f' };

	constructor(private actions$: Actions,
		private sightingService: HttpService) { }

	@Effect()
	loadSightings$ = this.actions$.ofType(sightingsActions.LOAD_SIGHTINGS)
		.pipe(
			switchMap(() => this.sightingService.get<Response<Sighting[], Meta>>('/v2/sightings?dateFrom=2016-10-01&dateTo=2018-10-02',
				new HttpHeaders(this.header))
				.pipe(
					map(sightings => new sightingsActions.LoadSightingsSuccess(sightings.data)),
					catchError(error => of(new sightingsActions.LoadSightingsFail(error)))
				)
			)
		);
}
