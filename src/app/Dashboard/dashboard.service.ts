import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private apiUrl = 'https://localhost:7021/Diver';

  constructor(private http: HttpClient) {}

  
   startApi(): Observable<any> {
    return this.http.get('https://localhost:7021/Diver/GetDataSimulator', {});
  }

}
