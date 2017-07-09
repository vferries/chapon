import {NgModule} from '@angular/core';
import {MdAutocompleteModule, MdButtonModule, MdInputModule, MdRadioModule, MdTabsModule} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdInputModule,
    MdAutocompleteModule
  ],
  exports: [
    MdButtonModule,
    MdInputModule,
    MdAutocompleteModule,
    MdTabsModule,
    MdRadioModule
  ]
})
export class MaterialModule { }
