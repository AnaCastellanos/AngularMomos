import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomoCreateComponent } from './momo-create.component';

describe('MomoCreateComponent', () => {
  let component: MomoCreateComponent;
  let fixture: ComponentFixture<MomoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
