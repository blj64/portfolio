import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-offre',
  standalone: true,
  imports: [ NgFor ],
  templateUrl: './offre.component.html',
  styleUrl: './offre.component.css'
})
export class OffreComponent {
    textArray: string[] = [
      'A la recherche DU MEILLEUR DEVELOPPEUR de ta region ?????Vous êtes tombé au bon endroit\nDescendez pour découvrir celui qui comblera vos attentes !!!',
      '', 
    ];
}
