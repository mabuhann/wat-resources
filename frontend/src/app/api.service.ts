import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';  // Import environment

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;  // Uses the apiUrl from environment.ts

  constructor(private http: HttpClient) { }

  // Function to get Mentor Texts (Example of GET request)
  getMentorTexts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}mentor-texts/`);
  }

  // Add function to create a Mentor Text (POST request)
  createMentorText(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}mentor-texts/`, data);
  }

  // Add function to update a Mentor Text (PUT request)
  updateMentorText(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}mentor-texts/${id}/`, data);
  }

  // Add function to delete a Mentor Text (DELETE request)
  deleteMentorText(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}mentor-texts/${id}/`);
  }
}
