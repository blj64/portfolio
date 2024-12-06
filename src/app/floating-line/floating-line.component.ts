import { Component } from '@angular/core';
import { Section1Component } from "./section1/section1.component";
import { Section2Component } from "./section2/section2.component";
import { Section3Component } from "./section3/section3.component";
import { OffreComponent } from "../offre/offre.component";
import { CompetenceComponent } from "./competence/competence.component";
import { ContactComponent } from "./contact/contact.component";
import { FormationComponent } from "./formation/formation.component";
import { InteretComponent } from "./interet/interet.component";
import { CompetenceAutreComponent } from "./competence-autre/competence-autre.component";
import { NgFor, NgClass } from '@angular/common';
import { ProjetsComponent } from "./projets/projets.component";
import { CvComponent } from "./cv/cv.component";
@Component({
  selector: 'app-floating-line',
  standalone: true,
  imports: [NgClass, NgFor, Section1Component, Section2Component, Section3Component, OffreComponent, CompetenceComponent, ContactComponent, FormationComponent, InteretComponent, CompetenceAutreComponent, ProjetsComponent, CvComponent],
  templateUrl: './floating-line.component.html',
  styleUrl: './floating-line.component.css'
})
export class FloatingLineComponent {
  sections = [
    { id: 'section1', label: 'Accueil' },
    { id: 'section3', label: 'Expériences' },
    { id: 'section4', label: 'Star wars' },
    { id: 'section5', label: 'Compétences' },
    { id: 'section6', label: 'Compétences Autres' },
    { id: 'section7', label: 'Formation' },
    { id: 'section8', label: 'Intérêt' },
    { id: 'section9', label: 'Projets' },
    { id: 'section11', label: 'CV' },
    { id: 'section10', label: 'Contacts' }


  ];

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  activeSection = 'section1';

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id; // Update active section
        }
      });
    }, options);

    // Observe all sections
    this.sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });
  }

 
}
