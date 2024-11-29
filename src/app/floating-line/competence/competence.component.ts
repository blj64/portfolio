import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
@Component({
  selector: 'app-competence',
  standalone: true,
  imports: [ NgIf, NgFor ],
  templateUrl: './competence.component.html',
  styleUrl: './competence.component.css'
})
export class CompetenceComponent {
  default:boolean = false;
  competenceFull:boolean = false;
  competence:string[] = [
    'React.js',
    'Angular',
    'Vue.js',
    'JavaScript',
    'TypeScript', 
    'HTML',
    'CSS', 
    'Bulma.css',
    'Tailwind',
    'PHP',
    'NODE.js',
    'Python',
    'FastAPI',
    'Pandas',
    'MySQL',
    'MongoDB',
    'Java',
    'C',
    'Docker',
    'Kubbernetes',
    'PowerBI',
    'Suite Office',
    'Linux',
    'Windows',
    'Travail en équipe',
    'Prise de parole en public',
    'Autonomie',
    'Flexibilité',
    
  ]
  displayedCompetences: string[] = [];
  defaut() {
    this.default= true;
  }

  addCompetence() {
    if (this.competence.length > 0) {
      const nextCompetence = this.competence.shift(); // Get the first item and remove it from the array
      if (nextCompetence) {
        this.displayedCompetences.push(nextCompetence);
      } else {
        this.competenceFull = true;
      }
    }
  }
}
