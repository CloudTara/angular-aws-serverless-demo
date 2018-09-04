import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalAppHeaderComponent } from './global-app-header.component';

describe('GlobalAppHeaderComponent', () => {
  let component: GlobalAppHeaderComponent;
  let fixture: ComponentFixture<GlobalAppHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalAppHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalAppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
