import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipierComponent } from './equipier.component';

describe('EquipierComponent', () => {
  let component: EquipierComponent;
  let fixture: ComponentFixture<EquipierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
