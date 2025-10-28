import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metrics.html',
  styleUrls: ['./metrics.css']
})
export class Metrics implements OnInit {
  metrics = signal<any[]>([]);

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
  }

}
