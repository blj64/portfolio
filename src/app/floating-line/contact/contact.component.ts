import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact:boolean = false;

  displayContact() {
    this.contact = !this.contact
  }
}
