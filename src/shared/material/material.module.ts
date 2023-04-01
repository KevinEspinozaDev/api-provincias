import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatFormFieldModule,

  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatFormFieldModule,
  ]
})
export class MaterialModule { }
