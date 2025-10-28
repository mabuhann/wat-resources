import { Component, OnInit, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, Rubric } from '../api.service';

@Component({
  selector: 'app-rubrics',
  imports: [CommonModule],
  templateUrl: './rubrics.html',
  styleUrls: ['./rubrics.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Rubrics implements OnInit {
  private apiService = inject(ApiService);
  rubrics = signal<Rubric[]>([]);

  ngOnInit(): void {
    this.getRubrics();
  }

  getRubrics(): void {
    this.apiService.getRubrics().subscribe({
      next: (data) => {
        console.log('Fetched rubrics:', data);
        this.rubrics.set(data);
      },
      error: (error) => {
        console.error('Error fetching rubrics:', error);
      }
    });
  }
}