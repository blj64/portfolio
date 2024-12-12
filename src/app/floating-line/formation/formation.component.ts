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
    this.craiova = !this.craiova
    this.cy = !this.cy


  }

  cyFlip() {
    this.lycee = !this.lycee
    this.craiova = !this.craiova
    this.cy = !this.cy
  }

  craiovaFlip() {
    this.lycee = !this.lycee
    this.craiova = !this.craiova
    this.cy = !this.cy
  }
}
