import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  equipeForm: FormGroup;
  compositions = [
    {code: 'mono', label: 'Mono'},
    {code: 'sept', label: 'Équipe de 7'},
    {code: 'neuf', label: 'Équipe de 9'},
    {code: 'autre', label: 'Autre'}
  ];
  private composition: FormControl;
  equipiers: FormGroup;
  configs: [{ fieldName: string, label: string }];

  constructor(fb: FormBuilder) {
    this.composition = fb.control('');
    this.equipiers = fb.group({});
    this.equipeForm = fb.group({
      composition: this.composition,
      equipiers: this.equipiers
    });
  }

  ngOnInit(): void {
  }

  changeComposition() {
    const newValue = this.composition.value;
    console.log(`Changed to ${newValue}`);
    switch (newValue) {
      case 'mono':
        this.configs = [
          {fieldName: 'chaponneur1', label: 'Chaponneur'},
          {fieldName: 'couseur1', label: 'Couseur'},
          {fieldName: 'aide1', label: 'Aide'}
        ];
        break;
      case 'sept':
        this.configs = [
          {fieldName: 'chaponneur1', label: 'Chaponneur'},
          {fieldName: 'chaponneur2', label: 'Chaponneur'},
          {fieldName: 'couseur1', label: 'Couseur'},
          {fieldName: 'couseur2', label: 'Couseur'},
          {fieldName: 'aide1', label: 'Aide'},
          {fieldName: 'aide1', label: 'Aide'},
          {fieldName: 'polyvalent', label: 'Polyvalent'}
        ];
        break;
      case 'neuf':
        this.configs = [
          {fieldName: 'chaponneur1', label: 'Chaponneur'},
          {fieldName: 'chaponneur2', label: 'Chaponneur'},
          {fieldName: 'chaponneur3', label: 'Chaponneur'},
          {fieldName: 'couseur1', label: 'Couseur'},
          {fieldName: 'couseur2', label: 'Couseur'},
          {fieldName: 'couseur3', label: 'Couseur'},
          {fieldName: 'aide1', label: 'Aide'},
          {fieldName: 'aide2', label: 'Aide'},
          {fieldName: 'aide3', label: 'Aide'}
        ];
        break;
      default:
        this.configs = [
          {fieldName: 'chaponneur1', label: 'Chaponneur'},
          {fieldName: 'couseur1', label: 'Couseur'},
          {fieldName: 'aide1', label: 'Aide'},
        ];
        break;
    }
  }

  submit(formContent) {
    console.log(`Formulaire soumis ${JSON.stringify(formContent)}`);
  }
}
