import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [NgIf],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent {

  lycee:boolean = false;
  cy:boolean = false;
  craiova:boolean = false;

  lyceeFlip() {
    this.lycee = !this.lycee
  }

  cyFlip() {
    this.cy = !this.cy
  }

  craiovaFlip() {
    this.craiova = !this.craiova
  }
}
