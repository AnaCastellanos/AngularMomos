import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomoEditComponent } from './momo-edit.component';

describe('MomoEditComponent', () => {
  let component: MomoEditComponent;
  let fixture: ComponentFixture<MomoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
