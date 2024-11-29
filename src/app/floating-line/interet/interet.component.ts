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

  changeResult(resultatBtn:string) {
    this.result = resultatBtn;
  }
}
