import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TakePictureComponent } from './take-picture.component';

describe('Hijo2Tab1Component', () => {
  let component: TakePictureComponent;
  let fixture: ComponentFixture<TakePictureComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TakePictureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TakePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
