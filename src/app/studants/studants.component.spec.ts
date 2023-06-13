import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudantsComponent } from './studants.component';

describe('StudantsComponent', () => {
  let component: StudantsComponent;
  let fixture: ComponentFixture<StudantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
