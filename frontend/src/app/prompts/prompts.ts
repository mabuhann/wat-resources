import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-prompts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prompts.html',
  styleUrls: ['./prompts.css']
})
export class Prompts implements OnInit {
  prompts = signal<any[]>([]);

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
  }
}
