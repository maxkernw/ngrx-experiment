export interface Sighting {
	author: string;
	commonName: string;
	scientificName: string;
	sightingObservers: string;
	sightingState: string;
	owner: string;
	site: {
		coordinates: any[]
	};
}
