import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewJobPostComponent } from './add-new-job-post.component';

describe('AddNewJobPostComponent', () => {
  let component: AddNewJobPostComponent;
  let fixture: ComponentFixture<AddNewJobPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewJobPostComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewJobPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
