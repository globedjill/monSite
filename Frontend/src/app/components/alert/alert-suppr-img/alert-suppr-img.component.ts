import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-suppr-img',
  templateUrl: './alert-suppr-img.component.html',
  styleUrls: ['./alert-suppr-img.component.sass']
})
export class AlertSupprImgComponent implements OnInit {

  constructor(
    public matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }
}
