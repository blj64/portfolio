import { Component } from '@angular/core';

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css'
})
export class Section2Component {
  experience:string = 'Appuyez sur un icone pour en savoir plus';
  titre:string = '';
  newExp(experience: string, titre: string) {
    this.experience = experience
    this.titre = titre;
  }
}
