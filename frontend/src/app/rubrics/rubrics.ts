import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-rubrics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rubrics.html',
  styleUrls: ['./rubrics.css']
})
export class Rubrics implements OnInit {
  rubrics = signal<any[]>([]);

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
  }

}
