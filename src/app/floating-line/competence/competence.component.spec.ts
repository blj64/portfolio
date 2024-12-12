import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent {
  displayedCompetences: string[] = [];
  competenceFull = false;
  default = false;

  @ViewChild('competencesList') competencesList!: ElementRef;

  addCompetence() {
    // Add a new competence if the list isn't full
    if (this.displayedCompetences.length < 10) { // Example condition
      this.displayedCompetences.push(`Competence ${this.displayedCompetences.length + 1}`);
      this.scrollToBottom();
    } else {
      this.competenceFull = true;
    }
  }

  defaut() {
    this.default = true;
  }

  scrollToBottom() {
    const element = this.competencesList.nativeElement;
    element.scrollTop = element.scrollHeight; // Scroll to the bottom of the list
  }
}
