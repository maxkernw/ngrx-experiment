import * as fromSightings from '../actions/sightings.actions';
import { Sighting } from '../../model/sighting.model';

export interface SightingsState {
	data: Array<Sighting>;
	loaded: boolean;
	loading: boolean;
}
const initialModelMock: Sighting = {
	author: 'name',
	commonName: 'string',
	scientificName: 'string',
	sightingObservers: 'string',
	sightingState: 'string',
	owner: 'string',
	site: {
		coordinates: []
	}
};

export const initialState: SightingsState = {
	data: [initialModelMock],
	loaded: false,
	loading: false
};

export function reducer(
	state = initialState,
	action: fromSightings.SightingsAction
): SightingsState {

	console.log(action, 'action');
	switch (action.type) {
		case fromSightings.LOAD_SIGHTINGS: {
			return {
				...state,
				loading: true
			};
		}
		case fromSightings.LOAD_SIGHTINGS_SUCCESS: {
			console.log(action.payload, 'test');
			return {
				...state,
				loading: false,
				loaded: true
			};
		}
		case fromSightings.LOAD_SIGHTINGS_FAIL: {
			return {
				...state,
				loading: false,
				loaded: false
			};
		}
	}
	return state;
}

export const getSightingsLoading = (state: SightingsState) => state.loading;
export const getSightingsLoaded = (state: SightingsState) => state.loaded;
export const getSightings = (state: SightingsState) => state.data;
