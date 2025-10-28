import { Component, OnInit, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';

interface MentorText {
  id?: number;
  title: string;
  description: string;
  category: string;
  skill: string;
}

@Component({
  selector: 'app-mentor-texts',
  templateUrl: './mentor-texts.html',
  styleUrls: ['./mentor-texts.css'],
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MentorTexts implements OnInit {
  mentorTexts = signal<MentorText[]>([]);
  selectedMentorText = signal<MentorText>({ title: '', description: '', category: '', skill: '' });
  isEditMode = signal<boolean>(false);
  isModalOpen = signal<boolean>(false);

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getMentorTexts();
  }

  getMentorTexts(): void {
    this.apiService.getMentorTexts().subscribe((data) => {
      this.mentorTexts.set(data);
    });
  }

  saveMentorText(): void {
    const mentorText = this.selectedMentorText();
    
    if (this.isEditMode()) {
      this.apiService.updateMentorText(mentorText).subscribe(() => {
        this.getMentorTexts();
        this.closeModal();
      });
    } else {
      this.apiService.createMentorText(mentorText).subscribe(() => {
        this.getMentorTexts();
        this.closeModal();
      });
    }
  }

  openEditModal(mentorText: MentorText): void {
    this.selectedMentorText.set({ ...mentorText });
    this.isEditMode.set(true);
    this.isModalOpen.set(true);
  }

  openNewModal(): void {
    this.selectedMentorText.set({ title: '', description: '', category: '', skill: '' });
    this.isEditMode.set(false);
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
    this.resetForm();
  }

  deleteMentorText(id: number): void {
    if (confirm('Are you sure you want to delete this Mentor Text?')) {
      this.apiService.deleteMentorText(id).subscribe(() => {
        this.getMentorTexts();
      });
    }
  }

  resetForm(): void {
    this.selectedMentorText.set({ title: '', description: '', category: '', skill: '' });
    this.isEditMode.set(false);
  }
}