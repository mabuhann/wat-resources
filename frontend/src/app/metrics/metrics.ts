import { Component, OnInit, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, Metric } from '../api.service';

@Component({
  selector: 'app-metrics',
  imports: [CommonModule],
  templateUrl: './metrics.html',
  styleUrls: ['./metrics.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Metrics implements OnInit {
  private apiService = inject(ApiService);
  metrics = signal<Metric[]>([]);

  ngOnInit(): void {
    this.getMetrics();
  }

  getMetrics(): void {
    this.apiService.getMetrics().subscribe({
      next: (data) => {
        console.log('Fetched metrics:', data);
        this.metrics.set(data);
      },
      error: (error) => {
        console.error('Error fetching metrics:', error);
      }
    });
  }
}