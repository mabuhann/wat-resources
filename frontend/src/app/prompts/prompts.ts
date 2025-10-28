import { Component, OnInit, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, Prompt } from '../api.service';

@Component({
  selector: 'app-prompts',
  imports: [CommonModule],
  templateUrl: './prompts.html',
  styleUrls: ['./prompts.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Prompts implements OnInit {
  private apiService = inject(ApiService);
  prompts = signal<Prompt[]>([]);

  ngOnInit(): void {
    this.getPrompts();
  }

  getPrompts(): void {
    this.apiService.getPrompts().subscribe({
      next: (data) => {
        console.log('Fetched prompts:', data);
        this.prompts.set(data);
      },
      error: (error) => {
        console.error('Error fetching prompts:', error);
      }
    });
  }
}