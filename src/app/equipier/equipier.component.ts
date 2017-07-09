import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-equipier',
  templateUrl: './equipier.component.html',
  styleUrls: ['./equipier.component.css']
})
export class EquipierComponent implements OnInit, OnDestroy {
  options = [
    'Jean-Michel Jumeau',
    'Marc Machin',
    'John Doe',
    'René Lataupe',
    'Herbert Laffont'
  ];
  filteredOptions: Observable<string[]>;
  equipier: FormControl;
  @Input()
  config;
  @Input()
  group: FormGroup;

  constructor(fb: FormBuilder) {
    this.equipier = fb.control('');
  }

  ngOnInit() {
    this.group.addControl(this.config.fieldName, this.equipier);
    this.filteredOptions = this.equipier.valueChanges
     .startWith(null)
     .map(val => val ? this.filter(val) : this.options.slice());
  }

  ngOnDestroy(): void {
    this.group.removeControl(this.config.fieldName);
  }

  filter(val: string): string[] {
    return this.options.filter(option => new RegExp(`${val}`, 'gi').test(option));
  }
}
