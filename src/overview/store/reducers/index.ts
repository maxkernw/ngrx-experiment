import { ActionReducerMap } from '@ngrx/store';

import * as fromSightings from './sightings.reducer';

export interface OverviewState {
	sightings: fromSightings.SightingsState;
}

export const reducers: ActionReducerMap<OverviewState> = {
	sightings: fromSightings.reducer
};
