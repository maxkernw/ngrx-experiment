import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IHttpService } from './http.service.interface';
import { catchError } from 'rxjs/operators';

import 'rxjs/add/observable/throw';

@Injectable({
	providedIn: 'root'
})
export class HttpService implements IHttpService {
	private _baseUrl: string;

	constructor(private http: HttpClient, private baseUrl: string) {
		this._baseUrl = baseUrl;
	}

	get<T>(path: string, headers?: HttpHeaders): Observable<T> {
		return this.http.get<T>(`${this.baseUrl}/${path}`, {
			headers: headers
		}).pipe(catchError((error: any) => Observable.throw(error.json())));
	}
}
