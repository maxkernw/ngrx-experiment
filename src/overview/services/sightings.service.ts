import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../../core/http/http.service';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class SightingsService extends HttpService {

	constructor(http: HttpClient) {
		console.log('test');
		super(http);
	}
}
