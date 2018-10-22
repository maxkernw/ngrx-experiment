import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IHttpService } from './http.service.interface';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class HttpService implements IHttpService {
	private _baseUrl = environment.baseUrl;

	constructor(private http: HttpClient) {
	}

	get<T>(path: string, headers?: HttpHeaders): Observable<T> {
		return this.http.get<T>(`${this._baseUrl}/${path}`, {
			headers: headers
		}).pipe(catchError((error: any) => Observable.throw(error.json())));
	}
}
