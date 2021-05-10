import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSupprImgComponent } from './alert-suppr-img.component';

describe('AlertSupprImgComponent', () => {
  let component: AlertSupprImgComponent;
  let fixture: ComponentFixture<AlertSupprImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertSupprImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertSupprImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
