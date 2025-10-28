import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorTexts } from './mentor-texts/mentor-texts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,  MentorTexts],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  selectedTab = signal<string>('mentor-texts');

  switchTab(tab: string) {
    this.selectedTab.set(tab);
  }
}