import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../../core/http/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class SightingsService extends HttpService {

	constructor(http: HttpClient) {
		super(http, environment.baseUrl);
	}
}
