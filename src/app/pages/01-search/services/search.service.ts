import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getData(data:string): Observable<any>{
    const url = environment.SEARCH_URL;

    return this.httpClient
    .get(url,
    {});
  }
}
