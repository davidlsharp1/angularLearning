import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputsComponent } from './inputs/inputs.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BindingsComponent } from './bindings/bindings.component';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { NgModel, } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';



@NgModule({
  imports:      
    [ 
      BrowserModule, 
      FormsModule, 
      MatInputModule, 
      BrowserAnimationsModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatSelectModule,
      MatCardModule,
      FormsModule,
      MatToolbarModule,
      MatButtonModule,
      MatSnackBarModule,

    ],
  declarations: [ AppComponent, HelloComponent, InputsComponent, BindingsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

