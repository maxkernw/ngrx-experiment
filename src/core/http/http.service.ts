import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IHttpService } from './http.service.interface';
import { environment } from 'src/environments/environment.prod';
import { catchError } from 'rxjs/operators';

import 'rxjs/add/observable/throw';

@Injectable({
	providedIn: 'root'
})
export class HttpService implements IHttpService {

	private readonly baseUrl = environment.baseUrl;

	constructor(private http: HttpClient) { }

	get<T>(path: string, headers?: HttpHeaders): Observable<T> {
		return this.http.get<T>(`${this.baseUrl}/${path}`, {
			headers: headers
		}).pipe(catchError((error: any) => Observable.throw(error.json())));
	}
}
