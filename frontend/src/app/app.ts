import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorTexts } from './mentor-texts/mentor-texts';
import { Metrics } from './metrics/metrics';
import { Prompts } from './prompts/prompts';
import { Rubrics } from './rubrics/rubrics';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MentorTexts, Metrics, Prompts, Rubrics],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  selectedTab = signal<string>('mentor-texts');

  switchTab(tab: string) {
    this.selectedTab.set(tab);
  }
}