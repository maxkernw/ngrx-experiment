import {
	ActionReducerMap,
	createSelector,
	createFeatureSelector
} from '@ngrx/store';

import * as fromSightings from './sightings.reducer';
import { OVERVIEW_STORE_NAME } from '../consts/overview.consts';

export interface OverviewState {
	sightings: fromSightings.SightingsState;
}

export const reducers: ActionReducerMap<OverviewState> = {
	sightings: fromSightings.reducer
};

export const getOverviewState = createFeatureSelector<OverviewState>(
	OVERVIEW_STORE_NAME
);

// Overview State
export const getSightingsState = createSelector(
	getOverviewState,
	(state: OverviewState) => state.sightings
);

export const getAllSightings = createSelector(getSightingsState, fromSightings.getSightings);
export const getSightingsLoaded = createSelector(getSightingsState, fromSightings.getSightingsLoaded);
export const getSightingsLoading = createSelector(getSightingsState, fromSightings.getSightingsLoading);
