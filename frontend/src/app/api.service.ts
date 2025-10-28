import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Skill {
  id?: number;
  title: string;
  description: string;
}

export interface MentorText {
  id?: number;
  title: string;
  description: string;
  category: string;
  skill: number;  // Foreign key to Skill
  created_on?: string;
}

export interface Metric {
  id?: number;
  title: string;
  description: string;
  category: string;
}

export interface Prompt {
  id?: number;
  title: string;
  description: string;
  category: string;
}

export interface Rubric {
  id?: number;
  title: string;
  description: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8000/api';

  // Skills
  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}/skills/`);
  }

  createSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(`${this.apiUrl}/skills/`, skill);
  }

  // Mentor Texts
  getMentorTexts(): Observable<MentorText[]> {
    return this.http.get<MentorText[]>(`${this.apiUrl}/mentor-texts/`);
  }

  createMentorText(mentorText: MentorText): Observable<MentorText> {
    return this.http.post<MentorText>(`${this.apiUrl}/mentor-texts/`, mentorText);
  }

  updateMentorText(mentorText: MentorText): Observable<MentorText> {
    return this.http.put<MentorText>(`${this.apiUrl}/mentor-texts/${mentorText.id}/`, mentorText);
  }

  deleteMentorText(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/mentor-texts/${id}/`);
  }

  // Metrics
  getMetrics(): Observable<Metric[]> {
    return this.http.get<Metric[]>(`${this.apiUrl}/metrics/`);
  }

  // Prompts
  getPrompts(): Observable<Prompt[]> {
    return this.http.get<Prompt[]>(`${this.apiUrl}/prompts/`);
  }

  // Rubrics
  getRubrics(): Observable<Rubric[]> {
    return this.http.get<Rubric[]>(`${this.apiUrl}/rubrics/`);
  }
}