import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [NgFor, NgIf, NgStyle],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css'
})
export class ProjetsComponent {
  projects: string[] = [
    'Pauge Jaune',
    'Gestionnaire serveurs Minecraft (en cours)',
    'Discord-like (en cours)',
    'Application de messagerie (en cours)',
    'Where is my dads (en cours)',
    'Jeu de la vie',
    'Portfolio',
    'Reconnaissance faciale'
  ];

  displayedProjects: string[] = [];
  selectedProject: string | null = null;
  currentOffset = 0;

  constructor() {
    // Create a large list for the spinning effect
    this.displayedProjects = [...this.projects, ...this.projects, ...this.projects];
  }

  spinRoulette() {
    this.selectedProject = null; // Reset the selection
    const randomIndex = Math.floor(Math.random() * this.projects.length);
    this.selectedProject = this.projects[randomIndex];

    // Calculate where the final selected project will land
    const fullLoops = 5; // Number of full spins
    const indexInDisplayed = this.projects.length * fullLoops + randomIndex;

    // Calculate the offset (distance to translate)
    const projectHeight = 96; // Height of each project div (adjust based on your CSS)
    this.currentOffset = -(indexInDisplayed * projectHeight);

    // Reset animation after 3 seconds (spinning time)
    setTimeout(() => {
      this.currentOffset = 0;
    }, 3000);
  }
}
