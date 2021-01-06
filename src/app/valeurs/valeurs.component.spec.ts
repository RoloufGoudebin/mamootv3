import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValeursComponent } from './valeurs.component';

describe('ValeursComponent', () => {
  let component: ValeursComponent;
  let fixture: ComponentFixture<ValeursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValeursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
