import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, signal } from '@angular/core';
import { ApiService, MentorText, Skill } from '../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mentor-texts',
  templateUrl: './mentor-texts.html',
  styleUrls: ['./mentor-texts.css'],
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MentorTexts implements OnInit {
  mentorTexts = signal<MentorText[]>([]);
  skills = signal<Skill[]>([]);
  selectedMentorText: Partial<MentorText> = { title: '', description: '', category: 'persuasive', skill: undefined };
  isEditMode = signal<boolean>(false);
  isModalOpen = signal<boolean>(false);
  isAddingSkill = signal<boolean>(false);
  newSkill: Partial<Skill> = { title: '', description: '' };

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getMentorTexts();
    this.getSkills();
  }

  getMentorTexts(): void {
    this.apiService.getMentorTexts().subscribe({
      next: (data) => {
        console.log('Fetched mentor texts:', data);
        this.mentorTexts.set(data);
      },
      error: (error) => {
        console.error('Error fetching mentor texts:', error);
      }
    });
  }

  getSkills(): void {
    this.apiService.getSkills().subscribe((data) => {
      this.skills.set(data);
    });
  }

  getSkillTitle(skillId: number): string {
    const skill = this.skills().find(s => s.id === skillId);
    return skill ? skill.title : 'Unknown';
  }

  saveMentorText(): void {
    // Validate that skill is selected
    if (!this.selectedMentorText.skill) {
      alert('Please select a skill');
      return;
    }

    const mentorTextToSave = { ...this.selectedMentorText } as MentorText;
    
    console.log('Saving mentor text:', mentorTextToSave);
    console.log('Skill value:', this.selectedMentorText.skill);
    console.log('Skill type:', typeof this.selectedMentorText.skill);
    
    if (this.isEditMode()) {
      this.apiService.updateMentorText(mentorTextToSave).subscribe({
        next: (response) => {
          console.log('Update success:', response);
          this.getMentorTexts();
          this.closeModal();
        },
        error: (error) => {
          console.error('Update error:', error);
          console.error('Error details:', error.error);
          alert(`Error updating mentor text: ${JSON.stringify(error.error)}`);
        }
      });
    } else {
      this.apiService.createMentorText(mentorTextToSave).subscribe({
        next: (response) => {
          console.log('Create success:', response);
          this.getMentorTexts();
          this.closeModal();
        },
        error: (error) => {
          console.error('Create error:', error);
          console.error('Error details:', error.error);
          alert(`Error creating mentor text: ${JSON.stringify(error.error)}`);
        }
      });
    }
  }

  openEditModal(mentorText: MentorText): void {
    this.selectedMentorText = { ...mentorText };
    this.isEditMode.set(true);
    this.isModalOpen.set(true);
    this.cdr.markForCheck();
  }

  openNewModal(): void {
    this.selectedMentorText = { title: '', description: '', category: 'persuasive', skill: undefined };
    this.isEditMode.set(false);
    this.isModalOpen.set(true);
    this.cdr.markForCheck();
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
    this.selectedMentorText = { title: '', description: '', category: 'persuasive', skill: undefined };
    this.isEditMode.set(false);
  }

  // Quick add skill functionality
  toggleAddSkill(): void {
    this.isAddingSkill.update(v => !v);
    this.newSkill = { title: '', description: '' };
    this.cdr.markForCheck();
  }

  createQuickSkill(): void {
    if (!this.newSkill.title || !this.newSkill.description) {
      alert('Please fill in both title and description for the skill');
      return;
    }

    this.apiService.createSkill(this.newSkill as Skill).subscribe({
      next: (response) => {
        console.log('Skill created:', response);
        this.getSkills();
        this.isAddingSkill.set(false);
        this.newSkill = { title: '', description: '' };
        // Auto-select the newly created skill
        if (response.id) {
          this.selectedMentorText.skill = response.id;
        }
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error('Error creating skill:', error);
        alert(`Error creating skill: ${error.error?.detail || error.message}`);
      }
    });
  }
}