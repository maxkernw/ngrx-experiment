import { Action } from '@ngrx/store';
import { Sighting } from '../../model/sighting.model';

export const LOAD_SIGHTINGS = '[Sightings] Load Sightings';
export const LOAD_SIGHTINGS_FAIL = '[Sightings] Load Sightings Fail';
export const LOAD_SIGHTINGS_SUCCESS = '[Sightings] Load Sightings Success';

export class LoadSightings implements Action {
	readonly type = LOAD_SIGHTINGS;
}

export class LoadSightingsFail implements Action {
	readonly type = LOAD_SIGHTINGS_FAIL;
	constructor(public payload: any) { }
}

export class LoadSightingsSuccess implements Action {
	readonly type = LOAD_SIGHTINGS_SUCCESS;
	constructor(public payload: Sighting[]) { }
}

// Action Types
export type SightingsAction = LoadSightings | LoadSightingsFail | LoadSightingsSuccess;
