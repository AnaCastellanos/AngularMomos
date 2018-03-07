import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomoDetailComponent } from './momo-detail.component';

describe('MomoDetailComponent', () => {
  let component: MomoDetailComponent;
  let fixture: ComponentFixture<MomoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
