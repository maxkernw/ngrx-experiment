export interface Response<T, K> {
	paper: K;
	data: T;
}

export interface Meta {
	offset: number;
	limit: number;
	totalCount: number;
	sortField: string;
	sortOrder: string;
}
