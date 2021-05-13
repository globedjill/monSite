import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  public contactForm:FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  submit(){

  }

}
