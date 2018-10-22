import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

export interface IHttpService {
	get<T>(path: string, headers?: HttpHeaders): Observable<T>;
}
