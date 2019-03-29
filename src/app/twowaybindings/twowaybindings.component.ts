import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-bindings',
  templateUrl: './twowaybindings.component.html',
  styleUrls: ['./twowaybindings.component.css']
})
export class BindingsComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  words;

  ngOnInit() {
  }

  openSnackBar(message: string) {
    this.snackBar.open(message + " text cleared",'', {
      duration: 2000,
    });
    this.words = '';
  }


}