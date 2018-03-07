import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomoListComponent } from './momo-list.component';

describe('MomoListComponent', () => {
  let component: MomoListComponent;
  let fixture: ComponentFixture<MomoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
