import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../../core/http/http.service';

@Injectable({
	providedIn: 'root'
})
export class SightingsService extends HttpService {
	constructor(http: HttpClient) {
		super(http);
	}
}
