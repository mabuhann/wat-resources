import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';  // Import ApiService

@Component({
  selector: 'app-mentor-texts',
  templateUrl: './mentor-texts.component.html',
  styleUrls: ['./mentor-texts.component.css']
})
export class MentorTextsComponent implements OnInit {
  mentorTexts: any[] = [];  // Array to store Mentor Texts

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getMentorTexts();
  }

  // Fetch Mentor Texts from the API
  getMentorTexts(): void {
    this.apiService.getMentorTexts().subscribe((data) => {
      this.mentorTexts = data;  // Store the fetched data
    });
  }

  // Add functionality to create a new Mentor Text
  addMentorText() {
    const newMentorText = { title: 'New Mentor Text', description: 'This is a description' };
    this.apiService.createMentorText(newMentorText).subscribe(response => {
      console.log('Mentor Text created:', response);
      this.getMentorTexts();  // Refresh the list of Mentor Texts
    });
  }

  // Function to delete a Mentor Text
  deleteMentorText(id: number) {
    this.apiService.deleteMentorText(id).subscribe(response => {
      console.log('Mentor Text deleted:', response);
      this.getMentorTexts();  // Refresh the list of Mentor Texts
    });
  }
}
