import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-interet',
  standalone: true,
  imports: [ NgIf ],
  templateUrl: './interet.component.html',
  styleUrl: './interet.component.css'
})
export class InteretComponent {
  result:string = '';
  redirection:string = '';

  changeResult(resultatBtn:string) {
    this.result = resultatBtn;
    if(resultatBtn=='loose') {
      this.redirection = "Don't worry, you are still allowed to have my contacts ;)"
    } else {
      this.redirection = "Congratulation, you won my contacts ;)"
    }
  }
}
