import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [ NgIf ],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css'
})
export class Section1Component {

  displayed: boolean = false;

  displayPicture() {
    this.displayed = !this.displayed
  }
}
