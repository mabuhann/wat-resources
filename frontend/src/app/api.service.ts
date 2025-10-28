import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api';  // Replace with the actual backend URL

  constructor(private http: HttpClient) {}

  // Fetch all Mentor Texts
  getMentorTexts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/mentor-texts/`);
  }

  // Create a new Mentor Text
  createMentorText(mentorText: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/mentor-texts/`, mentorText);
  }

  // Update an existing Mentor Text
  updateMentorText(mentorText: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/mentor-texts/${mentorText.id}/`, mentorText);
  }

  // Delete a Mentor Text
  deleteMentorText(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/mentor-texts/${id}/`);
  }
}
