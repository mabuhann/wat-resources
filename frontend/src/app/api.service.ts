import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';  // Import environment

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;  // Using the apiUrl from environment.ts

  constructor(private http: HttpClient) { }

  // Function to get Mentor Texts from the API
  getMentorTexts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}mentor-texts/`);
  }

  // Function to create a new Mentor Text
  createMentorText(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}mentor-texts/`, data);
  }

  // Function to update an existing Mentor Text
  updateMentorText(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}mentor-texts/${id}/`, data);
  }

  // Function to delete a Mentor Text
  deleteMentorText(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}mentor-texts/${id}/`);
  }
}
