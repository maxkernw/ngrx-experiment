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

	constructor(private http: HttpClient) {
	}

	get<T>(url: string, headers?: HttpHeaders): Observable<T> {
		return this.http.get<T>(`${url}`, {
			headers: headers
		}).pipe(catchError((error: any) => Observable.throw(error.json())));
	}
}
