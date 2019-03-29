import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-onewaybindings',
  templateUrl: './onewaybindings.component.html',
  styleUrls: ['./onewaybindings.component.css']
})
export class OnewaybindingsComponent implements OnInit {

  words = '';

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  update(words){
    this.words = words;
  }


  openSnackBar() {
    this.snackBar.open("text cleared",'', {
      duration: 2000,
    });
    this.words = "";
    
  }


}