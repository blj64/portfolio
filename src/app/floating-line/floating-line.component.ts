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
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-floating-line',
  standalone: true,
  imports: [NgFor, Section1Component, Section2Component, Section3Component, OffreComponent, CompetenceComponent, ContactComponent, FormationComponent, InteretComponent, CompetenceAutreComponent],
  templateUrl: './floating-line.component.html',
  styleUrl: './floating-line.component.css'
})
export class FloatingLineComponent {
  sections = [
    { id: 'section1', label: 'Offre' },
    { id: 'section3', label: 'Section 2' },
    { id: 'section4', label: 'Section 3' },
    { id: 'section5', label: 'Compétence' },
    { id: 'section6', label: 'Compétence Autre' },
    { id: 'section7', label: 'Formation' },
    { id: 'section8', label: 'Intérêt' },
    { id: 'section9', label: 'Contact' }
  ];

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
