import * as fromSightings from '../actions/sightings.actions';
import { Sighting } from '../../model/sighting.model';

export interface SightingsState {
	data: Array<Sighting>;
	loaded: boolean;
	loading: boolean;
}
const model: Sighting = {
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
	data: [model],
	loaded: false,
	loading: false
};

export function reducer(
	state = initialState,
	action: fromSightings.SightingsAction
): SightingsState {

	switch (action.type) {
		case fromSightings.LOAD_SIGHTINGS: {
			return {
				...state,
				loading: true
			};
		}
		case fromSightings.LOAD_SIGHTINGS_SUCCESS: {
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
